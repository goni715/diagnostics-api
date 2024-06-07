const AppointmentModel = require("../../models/appointment/AppointmentModel");
const GetAppointmentsService = require("../../services/appointment/GetAppointmentsService");
const DeleteService = require("../../services/common/DeleteService");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");



exports.CreateAppointment=async (req, res) => {
    await CreateService(req,res,AppointmentModel);
}
exports.GetAppointments=async(req,res)=>{
    await GetAppointmentsService(req,res,AppointmentModel)
}

exports.DeleteAppointment = async (req, res) =>{
    await DeleteService(req,res,AppointmentModel);
}

exports.UpdateAppointment = async (req, res) =>{
    await UpdateService(req,res,AppointmentModel);
}