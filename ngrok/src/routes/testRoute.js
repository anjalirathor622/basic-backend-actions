const express = require('express');
const  testRoute = express.Router();


testRoute.get('/test', (req, res)=>{

    res.status(200).send('HELLO EVERYONE')

})

module.exports = {testRoute}