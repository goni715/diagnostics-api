const ReportModel = require("../../models/report/ReportModel");
const CreateReportService = require("../../services/report/CreateReportService");

exports.CreateReport=async (req, res) => {
    await CreateReportService(req,res,ReportModel);
}


exports.GetReports=async (req, res) => {
    try{
        const data = await ReportModel.aggregate([
            {$lookup: {from: "patients", localField: "invoiceNumber", foreignField: "invoiceNumber", as: "patient"}}
        ])

        res.status(200).json({message:"success", data:data})
    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}

