const express =require('express');
const PatientController = require("../controllers/patient/PatientController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.post('/create-patient', AuthVerifyMiddleware, IsAdmin, PatientController.CreatePatient);
router.get('/get-patients', AuthVerifyMiddleware, IsAdmin, PatientController.GetPatients);




module.exports=router;

