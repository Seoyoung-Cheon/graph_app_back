const router = require("express").Router();
const topProductsRoute = require("../controllers/topProductsCtrl");

router.get("/topProducts", topProductsRoute.getTopProduct);

module.exports = router;
