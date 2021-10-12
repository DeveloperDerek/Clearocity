const userController = require("../controllers/user.controller");
const jwtAuth = require("../configs/jwt.config");
const router = require("express").Router();

router.post("/register", userController.register);
router.post("/update/:id", userController.update);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/login_check", userController.getLoggedInUser);

module.exports = router;