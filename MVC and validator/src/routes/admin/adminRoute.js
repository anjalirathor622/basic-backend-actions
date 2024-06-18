const express = require('express');

const { adminController } = require('../../controllers/admin/adminController');
const { classmateValidator } = require('../../validators/classmateValidator');
const adminRoute = express.Router();



adminRoute.get('/get_classmates',classmateValidator,adminController)

exports.adminRoute=adminRoute
