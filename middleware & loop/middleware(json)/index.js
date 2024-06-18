console.log("Starting");

//import area
//const something = require('somelybrary');
const express = require('express');
const { mfn1 } = require('./middleware/middleware');
//every function return somthing
const app = express();

require('dotenv').config();

app.use(express.json());    //its for reading json data 

//object.methot(arguments);
app.post('/classmate',mfn1,(req,res)=>{
    //console.log(req.body.classmates);
    res.json({
        "msg": `hello ${req.body.classmates}`
    })
})

console.log(process.env.PORTNO)
let port = process.env.PORTNO
app.listen(port,function(){
    console.log(`server is running on port no. ${port}` );
});