//console.log("Starting")


//impport area

const express = require('express')
const app = express()

//app.method(middleware)
app.use(express.json())

//testing
//object.method(argument)
app.post('/a',(req,res)=>{            //fat arrow funtion
    console.log(req)
    res.json({
        "msg":"hello"
    })
}) 

//url segment
app.post('/b/:name/:class/:mobno/:age',(req,res)=>{
    console.log(req.params)

    const std=req.params.name;
    const study=req.params.class;
    const mobno=req.params.mobno;
    const age=req.params.age
    
    res.json({std,study,mobno,age})
})

app.post('/api/:teacher/:couching',function(req,res){
    console.log(req.params)

    const teacher=req.params.teacher
    const couching=req.params.couching
    res.json({
        "msg":`we are learnig web development from ${couching} which is owned by our amazing teacher mr. ${teacher}`
     })
})

//query string 

app.get('/c',(req,res)=>{
    console.log(req.query)
    res.json({
        "std1":req.query.st1,
        "std2":req.query.st2,
        "std3":req.query.st3,
        "std4":req.query.st4,
        "std5":req.query.st5,
        "std6":req.query.st6
    })
})



//json data post>body>raw>json
app.post('/api2',(req,res)=>{
    console.log(req.body)
    res.status(205).json({
        "date":req.body.date,
        "day":req.body.day,
        "weather":req.body.weather

    })
})


const PORT = process.env.PORT || 4004
console.log(process.env.PORT)
//object.method(argguments)
app.listen(PORT,function(){
    console.log(`The server is running on ${PORT}  port`);
});

