const { Teacher } = require("../models/User");

let teacherController = (req,res)=>{
    const teacher = new Teacher(req.body);
    teacher.save()
    .then(d=>{
        res.status(200).json({
        
            msg:"ok",
            name:req.body.name,
            surname:req.body.surname,
            email: req.body.email
        });
    })
    .catch(e=>{
        res.status(400).json({
        
            msg:"error",
           error: e
        });
    })
    
}

exports.teacherController = teacherController;