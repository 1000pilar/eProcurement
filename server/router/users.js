var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    userController = require("../controllers/cont-user.js")


router.post('/signUp', userController.signUp);
router.post('/login', passport.authenticate('local', { session: false }), userController.login);


module.exports = router
