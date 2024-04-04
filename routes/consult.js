var router = require('express').Router();
const consultController = require('../controllers/consultController');
/* GET users listing. */

router.post("/", consultController.postConsult);

module.exports = router;
