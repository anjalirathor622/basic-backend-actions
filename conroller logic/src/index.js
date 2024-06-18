//console.log("Starting")

//Import Area
//const something = require('somelibrary')
const express = require('express');
const app = express();
const env = require('dotenv');
const { adminRoute } = require('./routes/admin/adminRoute');
const { parentsRoute } = require('./routes/parents/parentsRoute');
const { studensRoute } = require('./routes/students/studentsRoute');
const { teachersRoute } = require('./routes/teachers/teachersRoute');
env.config();

app.use('/admin',adminRoute);
app.use('/parents',parentsRoute);
app.use('/students',studensRoute);
app.use('/teachers',teachersRoute);


let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is listening on port " + port)
});