
//we can save a function in variable
let mdfn1 = function(req,res,next){
    console.log(req.body);
    req.body.teacher = req.body.teacher.toUpperCase();
    req.body.surname = req.body.surname.toUpperCase();
    req.body.adress = req.body.adress.toLowerCase();
    
    next();
}
let mdfn2 = function(req,res,next){
    console.log(req.body);
    req.body.name = req.body.name.replace("kiran","anjali");
    
    
    next();
}
let mdfn3 = function(req,res,next){

    next();
}



//there are two type of export in js
//default export
//named export

module.exports ={mdfn1 ,mdfn2}     //named export