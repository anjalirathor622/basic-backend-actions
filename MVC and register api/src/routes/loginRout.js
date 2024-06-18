const express = require('express');
const { loginController } = require('../controllers/loginController');
const loginRout = express.Router();

loginRout.post('/login',loginController)


exports.loginRout = loginRout;


