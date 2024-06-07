const express =require('express');
const PatientController = require("../controllers/patient/PatientController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.post('/create-patient', AuthVerifyMiddleware, IsAdmin, PatientController.CreatePatient);




module.exports=router;

