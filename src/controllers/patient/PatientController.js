const PatientModel = require("../../models/patient/PatientModel");
const CreatePatientService = require("../../services/patient/CreatePatientService");
const GetSortingByDateService = require("../../services/common/GetSortingByDateService");



exports.CreatePatient=async (req, res) => {
    await CreatePatientService(req,res,PatientModel);
}

exports.GetPatients=async(req,res)=>{
    await GetSortingByDateService(req,res,PatientModel)
}

