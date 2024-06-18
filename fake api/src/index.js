//const something = require(somelibrary)
const express = require('express');
const { testRoute } = require('./test/testRoute');
const app = express();

require('dotenv').config();

app.use('/test',testRoute)

let port = process.env.PORT 
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});