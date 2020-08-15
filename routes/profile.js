const express = require("express");
const router = express.Router();

const controllers = require("../controllers/profile")


router.get("/data",controllers.getmydata)
router.get("/bill",controllers.getmybill)


module.exports = router;