const express = require('express');
const { studentsDataController } = require('../../controllers/students/studentcontroler');

const studensRoute=express.Router();

studensRoute.get('/studens_data',studentsDataController);

module.exports = {studensRoute}