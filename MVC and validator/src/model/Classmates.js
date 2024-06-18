//const { Schema } = require("mongoose");
const {mongoose} = require('../config/db')

let classmateSchema = {name:String,
                       surname:String,
                       adress:String}
const Classmates = mongoose.model('Classmates',classmateSchema)

module.exports = {Classmates}