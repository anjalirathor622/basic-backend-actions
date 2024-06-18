const { Admin } = require("../models/User");

let adminController = (req,res)=>{
    const admin = new Admin(req.body);
    admin.save()
    .then(d=>{
        res.status(200).json({
            msg:'ok',
            data:req.body
        })
    })
    .catch(e=>{
        res.status(400).json({
            msg:'ok',
            error:e
        })
    })

}


module.exports = {adminController}