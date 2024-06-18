
const express = require('express');
const { adminController } = require('../../controllers/adminController');
const adminRoute = express.Router();
//const app = express();

//app.use(express.json());

 
adminRoute.get('/get_friends',adminController)


module.exports={adminRoute}