const express = require('express');
const AppointmentController = require("../controllers/appointment/AppointmentController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();

router.post("/create-appointment", AuthVerifyMiddleware, AppointmentController.CreateAppointment);
router.get("/get-appointments", AuthVerifyMiddleware, IsAdmin,  AppointmentController.GetAppointments);
router.delete("/delete-appointment/:id", AuthVerifyMiddleware, IsAdmin,  AppointmentController.DeleteAppointment);
router.put("/update-appointment/:id", AuthVerifyMiddleware, IsAdmin,  AppointmentController.UpdateAppointment);



module.exports = router;