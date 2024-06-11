const PatientModel = require("../../models/patient/PatientModel");
const SearchReportService = async (req, res, ReportModel) => {
    try{
        let {invoiceNumber, phone} = req.params;

        const report =await ReportModel.findOne({invoiceNumber:invoiceNumber, phone:phone});

            if(report){
                res.status(200).json({message: "success", data: report});
            }
            else {
                res.status(404).json({message: "fail", data: "couldn't find a report"});
            }
    }
    catch (error) {
        res.status(500).json({message: "error", data: error});
    }
}


module.exports=SearchReportService