
//const something =require(somelibrary);
const express = require('express');

const app = express();
require('dotenv').config();       //env import

app.use(express.json());     //read json data
const {body,check ,validationResult} = require('express-validator');      


//app.method(actual arguments);
app.post('/information',
    //name
    body('name')
        .isAlpha()
        .withMessage('please enter a valid name'),

    //email
    body('email')
        .isEmail()
        .withMessage('please enter a valid email'),
    //password
    body('password')
        .isStrongPassword({
            minLength: 8, 
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
        .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),

    //adharcard
    body('aadharnumber')
        .isLength({min:12 , max:12})
        .isNumeric()
        .withMessage("adharcard must be contain 12 character"),

    //mobileno
    body('mobileno')
        .isMobilePhone()
        .isNumeric()
        .isLength({
             min:10,
             max:10})
        .withMessage('mobileno only have 10 digit'),
    check('name2')
        .isAlpha()
        .isLength({min:2})
        .withMessage('please enter a valid name'),

(req,res)=>{
    
    const errors = validationResult(req);
    //if,else for condition
    if(!errors.isEmpty()){

        res.status(400).json({
            "err":errors.array()
        });
    }

    console.log(errors);
    console.log(req.body);

    res.json({
        msg:"hello",
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "aadharnumber":req.body.aadharnumber,
        "mobileno":req.body.mobileno
    })
} );

let port = process.env.PORT ||4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});