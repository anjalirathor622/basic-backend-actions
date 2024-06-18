const express = require('express');
const { adminController } = require('../controllers/adminController');
const { adminAuthMiddleware, authMiddleware } = require('../middlewares/authMiddleware');

const adminRoute = express.Router();

adminRoute.post('/admin/create',authMiddleware,adminAuthMiddleware,adminController)


exports.adminRoute=adminRoute