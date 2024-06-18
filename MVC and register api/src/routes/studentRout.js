const express = require('express');
const { studentController } = require('../controllers/studentConroller');
const { studentAuthMiddleware, authMiddleware } = require('../middlewares/authMiddleware');
const studentRoute = express.Router();


studentRoute.post('/student/create',authMiddleware,studentAuthMiddleware,studentController);

exports.studentRoute=studentRoute