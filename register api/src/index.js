const express = require('express');
const { registerRoute } = require('./routes/regiserRout');
const app = express();
require('dotenv').config();

app.use('/api',registerRoute)


let port = process.env.PORT
app.listen(port,()=>{
    console.log('listening on port',port)
})