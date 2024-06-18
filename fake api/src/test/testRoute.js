const express = require('express');
const { testController } = require('../controllers/testController');

const testRoute = express.Router();

//object.get(rotuename,middlewarefunctions,handleFunction);

// JS HOF

testRoute.get('/orders',testController);

exports.testRoute = testRoute