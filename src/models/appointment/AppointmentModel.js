const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
    {
        doctorId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "doctors",
            required: [true, "doctorId is required"],
        },
        patientName: {
            type: String,
            trim:true,
            required: [true, "patientName is required"],
            minLength: [3, "patientName must be minimum 3 characters"],
            maxLength: [31, "patientName must be maximum 31 characters"],
        },
        phone: {
            type: String,
            trim:true,
            required: [true, "phone is required"],
            maxLength: [11, "phone must be maximum 11 characters"],
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
        appointmentDate: {
            type: Date,
            required: [true, "appointmentDate is required"],
        },
    },
    { timestamps: true, versionKey:false}
);

const AppointmentModel = mongoose.model("appointments", AppointmentSchema);

module.exports = AppointmentModel;
