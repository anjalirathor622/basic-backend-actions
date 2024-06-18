const express = require('express');

const restaurentrout = express.Router();

restaurentrout.post('/restadress',(req, res)=>{
    res.status(200).json({
        restadress:"main market, nearbyforestoffice,builNO. 45,neemuch(MP)"
    })
})

restaurentrout.post('/checkprofit',(req, res)=>{
    res.status(200).json({
        msg:"checking all profit of this month"
    })
})

restaurentrout.post('/getdetails',(req, res)=>{
    res.status(200).json({
        msg:"geting details of all orders"
    })
})

restaurentrout.post('/confrimorders',(req, res)=>{
    res.status(200).json({
        msg:"confrim orders"
    })
})

restaurentrout.post('/custmers',(req, res)=>{
    res.status(200).json({
        msg:"checking all details about the customers. how many new customers we addd and how many customers we lost"
    })
})

module.exports = {restaurentrout}