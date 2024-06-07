const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "name is required"],
        },
        phone: {
            type: String,
            trim:true,
            required: [true, "phone is required"],
            maxLength: [11, "phone number must be maximum 11 characters"],
        },
        age: {
            type: String,
            required: [true, "age is required"],
            trim:true,
        },
        address: {
            type: String,
            trim:true,
            required: [true, "address is required"],
        },
        gender: {
            type: String,
            required: [true, "gender is required"],
            enum:["Male", "Female", "Other"]
        },
        bloodGroup: {
            type: String,
            required: [true, "gender is required"],
            enum:["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]
        },
        referredBy: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: [true, "referredBy is required"],
        },
        deliveryDate: {
            type: Date,
            required: [true, "appointmentDate is required"],
        },
        testName: {
            type: String,
            trim:true,
            required: [true, "address is required"],
        },
        price: {
            type: String,
            trim:true,
            required: [true, "address is required"],
        },
        status: {
            type: String,
            default: "unpaid",
            enum: ["paid", "unpaid"],
        },
        deliveryStatus: {
            type: String,
            default: "pending",
            enum: ["pending", "delivered"]
        },
        invoiceNumber:{
           type: String,
           required: [true, "invoiceNumber is required"],
        }
    },
    { timestamps: true, versionKey:false}
)


const PatientModel = mongoose.model("patients", PatientSchema);

module.exports = PatientModel