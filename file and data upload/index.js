console.log("Starting")

//Import Area 
const express= require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");

let env = require("dotenv");
env.config();

async function main(resolve, reject) {

   return await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}${process.env.CLUSTER}.bmcybml.${process.env.DATABASE}.net/?retryWrites=true&w=majority`)

}
main().then((d)=>{
    console.log("connected")
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './my-uploads')
        },
        filename: function (req, file, cb) {
           // console.log('inside diskstorage',req.body)
            let filename = file.originalname
            let randomNO = Math.ceil(Math.random()*1000000)
          cb(null, randomNO + '-' +filename)
        }
      })
      
      const upload = multer({ storage })
    
      //object.method(actual argument)
    const data = mongoose.model('data',{name:String,surname:String});
    app.post('/uploads',upload.single('myfile'),(req,res)=>{

        console.log(req.file)
        console.log("inside endpoint",req.body.name);

    const Info = new data(req.body)
    Info.save().then((d) => {
        console.log('saved')
        res.status(200).json({
            msg:"file uploaded succesfully",
            name:req.body.name,
            surname:req.body.surname
        })
    }).catch((e)=>{
        console.log('error')
    })
    });
}).catch((e)=>{
    console.log("not connected")
})



let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
});