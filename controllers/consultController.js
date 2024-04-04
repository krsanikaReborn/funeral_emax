const models = require('../models');


exports.postConsult = async(req, res, next) => {

    let result;
    let endStatus;

//    console.log(req.body.name);
    //컨설트 테이블에 VOC, 상담 등 입력.
    const consult = await models.consult.create({
        'category_id' : req.body.category_id,
        'name' : req.body.name,
        'org' : req.body.org,
        'pos' : req.body.pos,
        'email' : req.body.email,
        'tel' : req.body.tel,
        'wish_time' : req.body.wish_time,
        'content' : req.body.content,
        'olly_id' : req.body.olly_id,
        'is_marketing_agree' : req.body.is_agree,
    }).then(function(createdRecord){
        result = createdRecord;
        endStatus = 201;
    }).catch(function(err){
        console.log(err);
        result = err;
        endStatus = 500;
    });
    return res.status(endStatus).json(result);
}
