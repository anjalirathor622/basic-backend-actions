const { Classmates } = require("../../model/Classmates");
const {validationResult} = require("express-validator")

let adminController = async(req, res) => {
    //validation
    const errors = validationResult(req);

    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
        res.status(404).json({errors:errors.array()});
    }
 
    // If no error occurs, then this
    // block of code will run
        //res.send("Successfully validated")

        let data = {name:req.body.name,
                    surname:req.body.surname,
                    adress:req.body.adress }

        //let classObject = new ClassName();
        let classmateObj =await new Classmates(data);
        //let po = await classmateObj.save();  

        //po chain
        classmateObj.save()

        .then((d) =>
        res.status(200).json({
        msg:"ok",
        name:req.body.name,
        surname:req.body.surname,
        adresse:req.body.adress

        }),
        console.log('everything ok',req.body.name,
                                    req.body.surname,
                                    req.body.adress))

        .catch(err => console.log('error',err));
        }
//named export
module.exports ={adminController}