
const express = require('express');
const teacherRoute = express.Router();
const { teacherController } = require('../controllers/teacherController');

//const jwt = require('jsonwebtoken');
const { authMiddleware, teachertAuthMiddleware } = require('../middlewares/authMiddleware');


teacherRoute.post('/teacher/create',authMiddleware,teachertAuthMiddleware,teacherController);


//2. Named Export
exports.teacherRoute = teacherRoute;