const stripeController = require("../controllers/stripe.controller");
const router = require("express").Router();

router.post("/pay", stripeController.pay);

module.exports = router;