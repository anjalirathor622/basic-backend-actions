let teachersDataLogic = (req, res)=>{
    
    res.status(200).json({
        name:'Anil Dalar',
        contact:'1234567890',
        adress:'Neemuch(MP)'
    })
}

exports.teachersDataController = teachersDataLogic;