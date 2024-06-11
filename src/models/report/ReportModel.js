const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
    {
        invoiceNumber:{
            type: Number,
            required: [true, "invoiceNumber is required"],
            unique:true,
            ref:"patients"
        },
        phone: {
            type: String,
            trim:true,
            required: [true, "phone is required"],
            maxLength: [11, "phone number must be maximum 11 characters"],
        },
        result: {
            type: String,
            required: [true, "result is required"],
        }
    },
    { timestamps: true, versionKey:false}
)


const ReportModel = mongoose.model("reports", ReportSchema);

module.exports = ReportModel