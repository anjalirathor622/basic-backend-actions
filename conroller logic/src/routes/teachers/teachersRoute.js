const express = require('express');
const { teachersDataController } = require('../../controllers/teachers/teachersController');

const teachersRoute=express.Router();

teachersRoute.get('/teachers_data',teachersDataController);

module.exports = {teachersRoute}