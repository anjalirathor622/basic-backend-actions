const express = require('express');

const adminroute = express.Router();


adminroute.post('/getorders',(req, res)=>{
    res.status(200).json({
        msg:"geting ordres"
    })
})

adminroute.post('/getdetails',(req, res)=>{
    res.status(200).json({
        msg:"geting details"
    })
})

adminroute.post('/confrimorders',(req, res)=>{
    res.status(200).json({
        msg:"confrim ordres"
    })
})

module.exports = {adminroute}