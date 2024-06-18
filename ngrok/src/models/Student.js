const {mongoose} = require('../config/db')

let studentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: true
    },
    studentID:{
        type:String,
        required: true,
        unique:true
       
    },
    rollno:{
        type:Number,
        required: true,
        unique:true
    },
    adress:{ 
        type:String
    }, 
    role:{ 
        type:String,
        enum:['admin', 'teacher','student']
    }
},
{
    timestamp:true
})

const Student = mongoose.model('Student',studentSchema);

exports.Student=Student
