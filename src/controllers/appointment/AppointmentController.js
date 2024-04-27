const AppointmentModel = require("../../models/appointment/AppointmentModel");
const CreateWithUserIdService = require("../../services/common/CreateWithUserIdService");
const GetAppointmentsService = require("../../services/appointment/GetAppointmentsService");
const DeleteService = require("../../services/common/DeleteService");
const DoctorModel = require("../../models/doctor/DoctorModel");


exports.CreateAppointment=async (req, res) => {
    await CreateWithUserIdService(req,res,AppointmentModel);
}
exports.GetAppointments=async(req,res)=>{
    await GetAppointmentsService(req,res,AppointmentModel)
}

exports.DeleteAppointment = async (req, res) =>{
    await DeleteService(req,res,AppointmentModel);
}