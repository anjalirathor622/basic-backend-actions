const express = require('express');
const { creatRoute } = require('./routes/friendCreatRout');
const app = express();
require('dotenv').config();


app.use('/api',creatRoute)


let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port)
});