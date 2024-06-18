const { Student } = require("../models/Student");

let studentController = (req, res)=>{

    const studentObj = new Student(req.query);
    studentObj.save()
    .then(d=>{ 
       console.log(req.query)},

       res.status(200).json({
            msg:'data saved',
            data:req.query
        })
    )
    .catch(e=>{
      console.log('not saved', e),
      
      res.status(404).json({
        msg:'data not saved',
        error:e
    })
    })   
    }

exports.studentController=studentController