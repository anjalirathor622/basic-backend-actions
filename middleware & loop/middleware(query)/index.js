console.log('/\\/\\/\\/\\/\\/\\');   //zigzag pattern

//import area

const express = require('express');    //express import
const { mwfn1 } = require('./middleware/mymiddleware'); //middleware import
// every function return somthing
const app = express();

// dotenv import
require('dotenv').config();

//query string
app.get('/information',mwfn1, (req, res) =>{
    console.log(req.query.fuldetail);
    res.json({
        'msg':`hello ${req.query.fuldetail}`
    })
})


let port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
});