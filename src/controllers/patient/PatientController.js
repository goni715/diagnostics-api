const PatientModel = require("../../models/patient/PatientModel");
const CreatePatientService = require("../../services/patient/CreatePatientService");


exports.CreatePatient=async (req, res) => {
    await CreatePatientService(req,res,PatientModel);
}