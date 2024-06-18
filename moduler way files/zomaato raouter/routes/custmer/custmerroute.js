const express = require('express');
const app = express();
const custmerroute = express.Router();

app.use(express.json());

custmerroute.get('/selectfood', function (req, res){
    res.status(200).json({
        msg:'custmer has selected food for order',
        selected:"margrita pizza"
    });
})

custmerroute.get('/placeorder', function (req, res){
    res.status(200).json({
        msg:'custmer has placed order for margrita pizza'
    });
})

custmerroute.post('/custmerdetials', function (req, res){
    console.log(req.body);
    res.status(200).json({
        msg:'fulfiled adress details by custmer',
        name:req.body.name,
        adress:req.body.address,
        contact:req.body.mobno
        
    });
})

custmerroute.get('/trackorder', function (req, res){
    res.status(200).json({
        msg:'traking order'
    });
})

custmerroute.get('/reciveorder', function (req, res){
    res.status(200).json({
        msg:'recieved order from delivery boy',
        custmer:'thank you for good delivery'
    });
})

module.exports = {custmerroute}