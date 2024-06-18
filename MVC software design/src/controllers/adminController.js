//const express = require('express');
//const app = express();

const { Friends } = require("../models/friends");

//app.use(express.json());

//admin controller logic
let adminController=(req, res)=>{
    
    const friendsObj = new Friends({ name: req.body.name });
    
    friendsObj.save()

    .then(() =>
       
        res.status(200).json({
            msg: 'ok',
            name:req.body.name
        }),
        console.log(req.body.name),
        console.log('ok')
        )
    .catch((err) => 
        //console.log('error',err),

        res.status(400).json({
            msg: 'error',
        })
        ) 
    } 
 exports.adminController=adminController