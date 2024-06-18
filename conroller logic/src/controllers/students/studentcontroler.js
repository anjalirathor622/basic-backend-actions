let studentsDataLogic = (req, res)=>{
    let st1 = {
        name: 'Anjali Rathor',
        class:'12th',
        age:'17',
        subject:'Maths',
        rollNo:'01'
    }
    let st2 = {
        name: 'Sarita Rathor',
        class:'12th',
        age:'17',
        subject:'Arts',
        rollNo:'34'
    }
    res.json({
        student1: st1,
        student2: st2
    })
};

exports.studentsDataController = studentsDataLogic