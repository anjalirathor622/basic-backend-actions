
const mfn1 = (req,res,next)=>{
    console.log(req.body);

    //for in loop
    //for (key in object) {code to be executed}
    let classmates = ' ';
    for (key in req.body){

    //console.log(key);   //this will execute p(p:v)
    //object[property]
    console.log(req.body[key]);   //this will execute v(p:v)
    
    //classmates = classmates + req.body[key] + ' ';
    classmates += req.body[key] + ' ';

    
    }

    req.body = {classmates};
    console.log(classmates);
    next();
};


module.exports={mfn1}