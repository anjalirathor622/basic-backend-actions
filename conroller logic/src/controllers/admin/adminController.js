//js hof
let adminDataLogic = (req, res)=>{

    res.status(200).json({
        data:'School data',
    })
}
let adminStudentFeeLogic = (req, res)=>{

    res.status(200).json({
        data:'get all informetion about students due fees',
    })
}

//named export
//exports.somthing = somelogic
exports.adminDataController = adminDataLogic;
exports.adminFeeController = adminStudentFeeLogic;