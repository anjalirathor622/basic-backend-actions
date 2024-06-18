const express = require('express');
const { adminDataController, adminFeeController } = require('../../controllers/admin/adminController');
const adminRoute = express.Router();

//object.method(achual arguments)
adminRoute.post('/school_data',adminDataController);
adminRoute.post('/students_fee',adminFeeController);


//named export
module.exports = {adminRoute};