const orderController = require("../controllers/order.controller");
const jwtAuth = require("../configs/jwt.config");
const router = require("express").Router();

router.post("/checkout", jwtAuth, orderController.checkOut);
router.post("/create-payment-intent", jwtAuth, orderController.createPaymentIntent);
router.post("/start-order", jwtAuth, orderController.startOrder);
router.get("/view", jwtAuth, orderController.viewOrders);

module.exports = router;