var router = require('express').Router();
const usersController = require('../controllers/usersController');
/* GET users listing. */

router.get("/check/:id", usersController.checkExistUser);

router.post("/regist", usersController.registHolder);

router.get("/contract/:id", usersController.getContract);

router.get("/search/", usersController.getSearchForProtocoler );

router.get("/:id", usersController.getUser);

/*
router.get("/", usersController.getUserById);

router.get("/code:icode", usersController.getUserByICode);

router.get("/test", function(req, res, next){
    let { query } = req.query;
    console.log(query);

    res.send('respond with a resource');
});
*/
module.exports = router;
