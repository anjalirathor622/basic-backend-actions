const express = require('express');

const deliveryroute = express.Router();


deliveryroute.post('/getorders',(req, res)=>{
    res.status(200).json({
        msg:"delivery boy geting ordres"
    })
})

deliveryroute.post('/custmerdetails',(req, res)=>{
    res.status(200).json({
        msg:"getingc custmer adress details",
        custmername:'ANJALI RATHOR',
        adress:"ShastriNagar , houseNO.350, Neemuch(MP)",
        mobno:`1928736355`
    })
})

deliveryroute.post('/takingorders',(req, res)=>{
    res.status(200).json({
        msg:"delivery boy took order from restaurent"
    })
})

deliveryroute.post('/trackingadress',(req, res)=>{
    res.status(200).json({
        msg:"delivery boy tracking customer adress"
    })
})

deliveryroute.post('/orderdipatch',(req, res)=>{
    res.status(200).json({
        msg:"order is dispatched",
        deliveryboy:'order delivered.thank you for your order,please give us relable feedback'
    })
})
module.exports = {deliveryroute}