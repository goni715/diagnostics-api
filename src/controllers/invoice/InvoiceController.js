const GetAllService = require("../../services/common/GetAllService");
const PatientModel = require("../../models/patient/PatientModel");
const GetSortingByDateService = require("../../services/common/GetSortingByDateService");


exports.GetInvoices=async(req,res)=>{
    await GetSortingByDateService(req,res,PatientModel)
}
