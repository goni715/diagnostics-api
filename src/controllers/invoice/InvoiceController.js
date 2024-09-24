const PatientModel = require("../../models/patient/PatientModel");
const GetSortingByDateService = require("../../services/common/GetSortingByDateService");
const GetRecentInvoicesSeevice = require("../../services/invoice/GetRecentInvoicesService");


exports.GetInvoices=async(req,res)=>{
    await GetSortingByDateService(req,res,PatientModel)
}


exports.GetRecentInvoices=async(req,res)=>{
    await GetRecentInvoicesSeevice(req,res,PatientModel)
}

