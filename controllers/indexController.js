const models = require('../models');
const axios = require('axios');

//서버 구동 확인용. 아무 의미 없음.
exports.index = async(req, res, next) => {
    
    return res.render('index', {name : req.query.name});
}

//AWS에서의 서버 건강체크용 빈 API.
exports.health = async(req, res, next) => {
    return res.status(200).send(true);
}