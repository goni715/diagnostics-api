const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize")
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const dbConnect = require("./src/utility/dbConnect");
const authRouter = require("./src/routes/authRoute");
const contactRouter = require("./src/routes/contactRoute");
const userRouter = require("./src/routes/userRoute");
const doctorRouter = require("./src/routes/doctorRoute");
const appointmentRouter = require("./src/routes/appointmentRoute");
const reportRouter = require("./src/routes/reportRoute");
const patientRouter = require("./src/routes/patientRoute");
const invoiceRouter = require("./src/routes/invoiceRoute");



const app = express();


//Security Middleware Implementation
app.use(morgan("dev"));
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())



//RequestBodySizeIncrease//Body Parser Implementation
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));



//Request Rate Limit Implementation
const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   //10 Minutes
    max: 3000   //Limit each IP to 100 requests per windowMs
})
app.use(Limiter);




//MongoDB(mongoose) Atlas Database Connection
dbConnect();




//Managing Back-end Routing// Back-end Routing Implementation
//app.use('/api/v1', router);
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);
app.use('/api/user', userRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/report', reportRouter);
app.use('/api/patient', patientRouter);
app.use('/api/invoice', invoiceRouter);




//Testing-Route- HomPage
app.get('/', (req, res)=>{
    res.send('This is Daignostics center server')
})



//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({message:"Fail", data:"Route Not Found"});
});



module.exports = app;