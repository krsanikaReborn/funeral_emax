const models = require('../models');


exports.postSupport = async(req, res, next) => {
    let result;
    console.log(req.body);

    //장례지원 입력     
    const support = await models.funeral_support.create(
        req.body
    ).then(function(createdRecord){
        result = createdRecord;
    }).catch(function(err){
        return res.status(500).send(err);
    })

    return res.status(201).json(result);
}
