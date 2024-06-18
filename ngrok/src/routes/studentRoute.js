const express = require('express');
const { studentController } = require('../controllers/studentController');
const studentRoute = express.Router();


studentRoute.get('/student/create', studentController);

exports.studentRoute=studentRoute


