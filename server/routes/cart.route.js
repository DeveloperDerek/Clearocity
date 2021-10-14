const cartController = require("../controllers/cart.controller");
const jwtAuth = require("../configs/jwt.config");
const router = require("express").Router();

router.post("/addToCart/:id", jwtAuth, cartController.addToCart);
router.post("/removeFromCart", jwtAuth, cartController.removeFromCart);
router.get("/view", jwtAuth, cartController.viewCart);
router.get("/viewcart/:id", cartController.viewCartID);
router.post("/update", jwtAuth, cartController.updateCart);

module.exports = router;