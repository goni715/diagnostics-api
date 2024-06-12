const ReportModel = require("../../models/report/ReportModel");
const CreateReportService = require("../../services/report/CreateReportService");
const SearchReportService = require("../../services/report/SearchReportService");

exports.CreateReport=async (req, res) => {
    await CreateReportService(req,res,ReportModel);
}


exports.GetReports=async (req, res) => {
    try{
        const data = await ReportModel.aggregate([
            {$lookup: {from: "patients", localField: "invoiceNumber", foreignField: "invoiceNumber", as: "patient"}},
            {$sort : { createdAt: -1 }},
        ])

        res.status(200).json({message:"success", data:data})
    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}



exports.SearchReport=async (req, res) => {
    await SearchReportService(req,res,ReportModel);
}

exports.GetReport=async (req, res) => {
    try{
        const data = await ReportModel.aggregate([
            {$lookup: {from: "patients", localField: "invoiceNumber", foreignField: "invoiceNumber", as: "patient"}},
            { $unwind: '$patient' }, // Deconstruct the comments array
            {
                $lookup: {
                    from: 'doctors', // collection name to lookup
                    localField: 'patient.referredBy',
                    foreignField: '_id',
                    as: 'patient.referredBy'
                } // Populate the postedBy field in comments
            },
            { $unwind: '$patient.referredBy' },
            {
                $project: {
                    invoiceNumber: 1,
                    phone: 1,
                    result: 1,
                    patientName: "$patient.name", // Project patient name from the joined collection,
                    testName: "$patient.testName",
                    age: "$patient.age", // Project patient age from the joined collection,
                    gender: "$patient.gender",
                    address:"$patient.address",
                    referredBy:"$patient.referredBy.name"
                }
            }
        ])

        res.status(200).json({message:"success", data:data[0]})
    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}

