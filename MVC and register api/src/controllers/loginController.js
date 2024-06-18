const { User } = require("../models/User");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let loginController = (req,res)=>{

    // Recive the email and password
    //1. Recive the username/email and password from client.
    console.log(req.body)

    const { email,password_hash } = req.body // Destructuring
    

    //2. Check if the username/email is available in db
    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({ email: email},(err,user)=>{

        console.log(user);
        if(user !== null){
            //email is avaiable 
            //3.1 If availabe Say "User Exits We can give the token"

            //3.1 Lets access the existing db hash

            console.log(user.password_hash);

            //bcrypt.compareSync(myPlaintextPassword, hash); // true
            if(bcrypt.compareSync(password_hash, user.password_hash)){
                //True
                 //OK it okay
                 console.log(user.email)
                 res.status(200).json({
                     msg:"Login Success",
                     name:user.name,
                     email:user.email,
                     role:user.role,
                     token: jwt.sign({user:user.email,role:user.role},process.env.JWT_TOKEN, {
                         expiresIn: "1d",
                     })
                 });
            }else{  
                //False
                res.status(403).json({
                    msg:'Invalid credentials'
                });
            }
            
        }else{
            res.status(403).json({
                msg:'Invalid credentials'
            });
        }
    })

    
}

module.exports = { loginController }