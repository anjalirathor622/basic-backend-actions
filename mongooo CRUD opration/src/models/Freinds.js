const { mongoose } = require('mongoose');

let friendSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,  
    },
    adress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})


let Friends = mongoose.model('Friend',friendSchema)

module.exports = { Friends }