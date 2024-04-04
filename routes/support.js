var router = require('express').Router();
const supportController = require('../controllers/supportController');
/* GET users listing. */

router.post("/", supportController.postSupport);

module.exports = router;
