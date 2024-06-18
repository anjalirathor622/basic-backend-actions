const express = require('express');
const { parentsDataConttroller } = require('../../controllers/parents/parentscontroler');

const parentsRoute=express.Router();


parentsRoute.post('/parents_data',parentsDataConttroller)
//export
module.exports={parentsRoute}