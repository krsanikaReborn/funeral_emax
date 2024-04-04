const { Sequelize, sequelize } = require('../models');
const models = require('../models');
const Op = require('sequelize').Op;
models.user.hasOne(models.contract, {as : "contract", foreignKey: "CUS_NO"});

exports.checkExistUser = async(req,res,next)=>{
    //올리아이디로 홀더 모델 검색. 있으면 반환.
    const ollyholder = await models.ollyholder.findOne({where : {olly_id : req.params.id}, raw:true})
    .then((result)=> {
        console.log(result);
        if(result != null) return res.status(200).jsonp(result);
        else return res.status(204).jsonp(result);
    })
    .catch((err)=> {
        return res.status(404).jsonp(err);
    });
}

exports.registHolder = async(req,res,next)=>{
    let results = [];
    let endStatus = 404;

    console.log(req.body);
    //user모델에서 CUS_NO들을 꺼내서 ollyholder에 생성
    const users = await models.user.findAll({
        where : {
            "CUS_NAME" : req.body.name,
            "CUS_MOBILE" : req.body.phone,
            "CUS_IDNTY_ID" : {[Op.like] : req.body.id_number + "%"},
        },
        attributes : ["CUS_NO"],
        raw : true,    
        }).catch((err) =>{                        
            return res.status(404).send(err);
        });
    console.log("USERS", users);
    if(users.length == 0){
        return res.status(404).send("USER not Exists.");        
    }
    

    for(const user of users){
        models.ollyholder.removeAttribute('id');
            //유저 계정에 CUS_NO를 물린 레코드를 생성
        const ollyholder = await models.ollyholder.create({
            "olly_id" : req.body.id,
            "cus_no" : user.CUS_NO,
        })
        .then((result)=> {
            endStatus = 200;
            results.push(result);
        })
        .catch((err)=> {
            endStatus = 404;
            results.push(err)
        });    
    } 

    return res.status(endStatus).json(results);
}


exports.getUser = async(req, res, next) => {
    //CUS_NO는 복수일 수 있어서 배열에 삽입.
    let cusNos = [];
    const holder = await models.ollyholder.findAll({
        where : {"olly_id" : req.params.id},
        raw : true
    }).then((results) => {
        for(const item of results){
            cusNos.push(item.cus_no);
        }
    }).catch((err) => {
        return res.status(404).send(err);
    })

    //가져온 CUS_NO배열로 테이블 확인
    const user = await models.user.findAll({
        where : { "CUS_NO" : {[Op.in] : cusNos } },
        include : [{
            model : models.contract,
            as : "contract",
            attributes : ["PRO_NAME", "TOT_PAY_TIMES", "PAYAMT"]
        }]
    }).then((result) => {        
        if(result.length !== 0){
            return res.status(200).jsonp({isUser : true, data : result});
        }else{
            return res.status(404).jsonp({isUser : false});
        }
    }).catch((err) => {
        return res.status(500).jsonp(err);
    });

}

//계약정보 가져오기
exports.getContract = async(req, res, next) => {
    let cusNos = [];

    let endStatus;
    let results = {isUser : false};

    const holder = await models.ollyholder.findAll({
        where : {"olly_id" : req.params.id},
        raw : true
    }).then((results) => {
        for(const item of results){
            cusNos.push(item.cus_no);
        }
    }).catch((err) => {
        return res.status(404).jsonp(err);
    })

    const contracts = await models.contract.findAll({
        where : {"CUS_NO" : {[Op.in] : cusNos} },
        attributes : ["CNTRCT_NO", "PRO_NAME", "PRO_NUMBER", "PRO_MONEY", "CNTRCT_DATE", "LAST_TIMES", "PAYAMT", "DISCOUNT_CNT", "REMAIN_TIMES", "REMAIN_PAYAMT",  "PAY_SDATE", "WISHPAY_DATE", "EXPIRE_DATE", "CNTRCT_PAY_STTUS_NM", "BILL_BANK", "BILL_NO", "BILL_NAME", "BILL_IDENTITYID", "BILL_GUBUN", "CANCEL_REFU_RATE", "CANCEL_REFU_AMT"],
    })
    .then((result) =>{
        if(result.length !== 0){
            endStatus = 200;
            results.isUser = true;
            results.data = result;
        }else{
            endStatus = 404;
        }
    })
    .catch((err)=>{
        endStatus = 404;
        results.data = err;
    });

    return res.status(endStatus).jsonp(results);
}



//의전팀장용 검색. 이름 민번 번호가 모두 들어오면 3항목이 모두 일치하는것을 고름
exports.getSearchForProtocoler = async(req, res, next) => {
    let endStatus;
    let results;
/*    
    let wheres = { };
    if(req.query.name.length != 0) wheres.CUS_NAME = req.query.name;        
    if(req.query.id_number.length != 0) wheres.CUS_IDNTY_ID = { [Op.like] : `${req.query.id_number}%`};
    if(req.query.tel.length != 0) wheres.CUS_MOBILE = { [Op.like] : `%${req.query.tel}%`};

    const contracts = await models.contract.findAll({
        where : wheres,
        attributes : [ "CUS_NAME", "CUS_IDNTY_ID", "CUS_MOBILE", "CNTRCT_NO", "PRO_NAME", "PAYAMT", "REMAIN_PAYAMT", "CUS_EMP_NM"],
        async : false,
    })*/

    let wheres = 'WHERE ';
    wheres += req.query.name.length != 0 ? `[contract].[CUS_NAME] = '${req.query.name}'`: '';
    if(req.query.id_number.length != 0){
        if(wheres.length != 6) wheres += ' AND ';
        wheres += `LEFT([contract].[CUS_IDNTY_ID], 6) = '${req.query.id_number}'`;
    }
    if(req.query.tel.length != 0){
        if(wheres.length != 6) wheres += ' AND ';
        wheres += `RIGHT([contract].[CUS_MOBILE], 4) = '${req.query.tel}'`;
    }
    
    let query = "SELECT [CUS_NAME], [CUS_IDNTY_ID], [CUS_MOBILE], [CNTRCT_NO], [PRO_NAME], [PAYAMT], [REMAIN_PAYAMT], [CUS_EMP_NM] FROM [NOVA_MEB0101V] AS [contract] " + wheres;
    console.log(query);
    const contracts = await sequelize.query(
        query, 
        {type : Sequelize.QueryTypes.SELECT}
    )

    .then((records)=> {
//        console.log(records);
        endStatus = 200;
        results = records;
    }).catch((err)=> {
        console.log(err);
        endStatus = 404;
        results = err;
    });

    return res.status(endStatus).jsonp(results);
}