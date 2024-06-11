const PatientModel = require("../../models/patient/PatientModel");
const CreatePatientService = require("../../services/patient/CreatePatientService");
const GetSortingByDateService = require("../../services/common/GetSortingByDateService");
const DetailsService = require("../../services/common/DetailsService");
const UpdateService = require("../../services/common/UpdateService");



exports.CreatePatient=async (req, res) => {
    await CreatePatientService(req,res,PatientModel);
}

exports.GetPatients=async(req,res)=>{
    await GetSortingByDateService(req,res,PatientModel)
}

exports.GetPatient=async(req,res)=>{
    await DetailsService(req,res,PatientModel);
}

exports.UpdatePatient=async(req,res)=>{
    await UpdateService(req,res,PatientModel);
}