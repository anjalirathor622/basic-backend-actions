const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(`mongodb://localhost:27017`)
.then(
    d=>console.log('db connected')

).catch(
    e=>console.log('error connecting')
)

exports.mongoose=mongoose