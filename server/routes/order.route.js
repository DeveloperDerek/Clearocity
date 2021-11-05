const orderController = require("../controllers/order.controller");
const jwtAuth = require("../configs/jwt.config");
const router = require("express").Router();

router.post("/checkout", jwtAuth, orderController.checkOut);
router.post("/create-payment-intent/:id", jwtAuth, orderController.createPaymentIntent);
router.get("/view", jwtAuth, orderController.viewOrders);
router.get("/single-view/:id", orderController.viewOrder);
router.post("/create-address", orderController.createAddress);
router.post("/testmail", orderController.testMail);


module.exports = router;