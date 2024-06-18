const express = require('express');
const { creatController } = require('../controllers/creatController');
const creatRoute = express.Router();


creatRoute.post('/creat/friend',creatController)

exports.creatRoute = creatRoute;