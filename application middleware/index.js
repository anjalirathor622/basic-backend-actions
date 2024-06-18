console.log("working");

const express = require('express');
const { middlw } = require('./middleware/mymiddleware');

const app = express();
require('dotenv').config();

app.use(middlw);


app.post('/info', (req, res)=>{

    res.json({"msg":"hello"});
});



const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});