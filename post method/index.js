//console.log("helloo");

//import area 
const express = require('express')
const app = express()

//object.method(middleware)
app.use(express.json());

//object.method(arguments)
app.post('/a', function (req, res) {     //clasical function
  
    console.log(req.body)

    //object.method(arguments)
    res.json({
        "name": req.body.name,     
        "surname":req.body.surname,
        "adress":req.body.adress,
        "age":req.body.age
    })
  })
  
  //object.method('routname', cbfn)
  app.get('/b',(req,res)=>{    //fat arrow funtion

    console.log(req.query)
    res.status(202).json({
        "name":req.query.name,
        "surname":req.query.surname,
        "age":req.query.myage
    })
  })
  
  const PORT = 2000;

  //object.method(arguments)
  app.listen(PORT, ()=>{          //cbfn
    console.log(`server is running on ${PORT} port` );
  })
