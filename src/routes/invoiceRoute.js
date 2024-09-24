const express =require('express');
const InvoiceController = require("../controllers/invoice/InvoiceController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.get('/get-invoices', AuthVerifyMiddleware, IsAdmin, InvoiceController.GetInvoices);
router.get('/get-recent-invoices', AuthVerifyMiddleware, IsAdmin, InvoiceController.GetRecentInvoices);




module.exports=router;

