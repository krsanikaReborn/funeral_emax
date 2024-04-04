var router = require('express').Router();
const obituaryController = require('../controllers/obituaryController');
/* GET users listing. */

router.get("/", obituaryController.getNotice);

module.exports = router;
