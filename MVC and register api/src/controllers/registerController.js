const { User } = require("../models/User");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');


//HOF
let registerController = function(req,res){

    

    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({ email:req.body.email,username:req.body.username},function (err,user){
        //console.log(user)
        if(user === null){
            

            //console.log(req.body.password_hash);
            const saltRounds = 10;
            let encryptedpassword = bcrypt.hashSync(req.body.password_hash, saltRounds);;
            req.body.password_hash = encryptedpassword;


        //db incertion
        const user = new User(req.body);
            user.save().then(d => {
               
                //var token = jwt.sign(req.body,process.env.JWT_TOKEN);
                let data ={
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email:req.body.email,
                    username: req.body.username,
                    password_hash :req.body.password_hash,
                    role: req.body.role,
                    //token:token
                }  
                //delete data.username,
                //delete data.password_hash;
                 
                //req.body.token = token;
                res.status(200).json({
                    msg:'User registed successfully',
                    data:data
                });
            }).catch(e=>{
                console.log(e);
                res.status(400).json({
                    msg:'error'

                });
            });
            
        }else{
            res.status(404).json({
                msg:'User is already registerd'
            });
        }
    })
}


module.exports = {registerController}