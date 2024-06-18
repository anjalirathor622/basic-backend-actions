const express = require('express');
const { registerController } = require('../controllers/registerController');

const registerRoute = express.Router();
const { myValidator } = require('../validators/myValidator')

registerRoute.get('/register',myValidator,registerController)


exports.registerRoute=registerRoute