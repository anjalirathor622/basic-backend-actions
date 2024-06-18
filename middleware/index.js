//console.log("working")

//import area
const express = require('express')
const app = express()

require('dotenv').config()

app.get('/',(req,res,next)=>{

    //const data = req.query.name
   
    req.query.name=req.query.name.toUpperCase();
    console.log(req.query.name)
    
    
    next()

},(req,res)=>{
    res.json({
        "name":req.query.name
    })
})

let port=6000
app.listen(port,()=>{
    console.log('this server is working on port ' +port)    
})
    
    
