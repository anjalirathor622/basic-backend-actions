//console.log('ok')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Student } = require('./models/Student');
const { studentRoute } = require('./routes/studentRoute');
const { testRoute } = require('./routes/testRoute');

require('dotenv').config();

app.use('/api',testRoute);
app.use('/api',studentRoute)


let port = process.env.PORT 
app.listen(port, ()=>{
    console.log('listening on port',port)
});