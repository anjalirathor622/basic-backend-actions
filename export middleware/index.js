//console.log("Starting");

//import area
//const something = require("somelibrarry");
const express = require('express');

//const{middleware functions}= require('adress');
const { mdfn1, mdfn2 } = require('./middleware/mymiddleware');
//every funtion return something
const app = express();

app.use(express.json())

require('dotenv').config();

console.log(process.env.PORT);

//object.method(arguments)
app.post('/stdname',mdfn1,mdfn2,(req,res)=>{

    const name = req.body.teacher;
    const surname = req.body.surname;
    const adress = req.body.adress;
    let name2 = req.body.name

    console.log (req.body.name)

    res.json({'msg':`hello, i am ${name} ${surname} from ${adress}`,
   'name': `${name2}`
    });
});


const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}` );
});