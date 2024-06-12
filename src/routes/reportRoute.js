const express = require('express');
const ReportController = require("../controllers/report/ReportController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();

router.post("/create-report", AuthVerifyMiddleware, ReportController.CreateReport);
router.get("/get-reports", AuthVerifyMiddleware, IsAdmin,  ReportController.GetReports);
router.post("/search-report", ReportController.SearchReport);
router.get("/get-report/:id", ReportController.GetReport);


module.exports = router;