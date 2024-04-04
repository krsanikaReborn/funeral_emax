var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/health', indexController.health);

module.exports = router;
