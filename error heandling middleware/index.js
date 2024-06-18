console.log("Starting");

//const something = require(somelibrary);
const express = require("express");
const { mwfn,midlew } = require("./middleware/mymiddleware");

const app = express();
require('dotenv').config();


app.use(mwfn);

//console.log(process.env)

app.get('/',midlew, (req,res)=>{

    
    res.send('hello how are you?')
})

let port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})