const models = require('../models');

exports.getNotice = async(req, res, next) => {
    // 장례정보 획득하는 간단한 내용.
    const obituaries = await models.obituary.findAll({raw : true}
        ).catch(function(err){
            res.status(500).jsonp(err);
        });

    return res.status(200).jsonp(obituaries);
}
