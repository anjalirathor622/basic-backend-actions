//import area
const express = require('express');
const { adminRoute } = require('./routes/adminRoute');
const { loginRout } = require('./routes/loginRout');
const { registerRoute } = require('./routes/registerRoute');
const { studentRoute } = require('./routes/studentRout');
const { teacherRoute } = require('./routes/teacherRout');
const app = express();
app.use(express.json());
require('dotenv').config();

app.use('/api',registerRoute);
app.use('/api',loginRout);
app.use('/api',adminRoute);
app.use('/api',teacherRoute)
app.use('/api',studentRoute)



let port = process.env.PORT ;
app.listen(port,()=>console.log('listening on port',port));