const orderController = require("../controllers/order.controller");
const router = require("express").Router();

router.post("/checkout", orderController.checkOut);

module.exports = router;