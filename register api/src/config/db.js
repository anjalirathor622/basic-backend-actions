const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/')
.then(
    d=>console.log('db Connected')
).catch(
    err=>console.log('db Connection failed')
)

module.exports = {mongoose}