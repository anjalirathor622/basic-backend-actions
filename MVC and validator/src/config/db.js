const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.bmcybml.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>console.log('Connect'))
.catch(e=>console.log('Error connecting',e));

exports.mongoose=mongoose;