var jwt = require('jsonwebtoken');


let authMiddleware = (req,res,next)=>{
    //string.split();
    //req.headers.authorization = string
    //req.headers.authorization.split()
    console.log(req.headers.authorization.split(" ")[1]);
    var token = req.headers.authorization.split(" ")[1]

    try {
        //jwt.verify(token, secretOrPublicKey, [options, callback])
        var decoded = jwt.verify(token,process.env.JWT_TOKEN);
        console.log(decoded);
        req.username = decoded.username;
        req.role = decoded.role;
        req.email = decoded.user;
        next();
    } catch (error) {
        res.status(403).json({
            msg:'Invalid credentials'
        });
    }
}
let teachertAuthMiddleware = (req, res, next) => {
    if(req.role === 'admin'){
        
        next();
    }else{
        res.status(403).json({error:'invalid token'})
    }
}
let studentAuthMiddleware = (req, res, next) => {
    if(req.role !== 'student'){
        
        next();
    }else{
        res.status(403).json({error:'invalid token'})
    }
}
let adminAuthMiddleware = (req, res, next) => {
    console.log(req.role)
    if(req.role === 'admin'){
        
        next();
    }else{
        res.status(403).json({error:'invalid token'})
    }
}

//exports.authMiddleware = authMiddleware;
module.exports = { authMiddleware,
                   teachertAuthMiddleware,
                   studentAuthMiddleware,
                   adminAuthMiddleware
                }