const { Student } = require("../models/User");

let studentController = (req,res)=>{


const student = new Student(req.body);
student.save()
.then(d=>{
    res.status(200).json({
        
        msg:"ok",
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
    });
})
.catch(e=>{
    res.status(400).json({
        
        msg:"errror",
        error: e
    });
});


 
}

exports.studentController = studentController;