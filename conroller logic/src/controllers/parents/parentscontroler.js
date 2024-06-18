//js hof
let parentsDataLogic = (req, res)=>{
    
    res.status(200).json({
        name:'Ramesh Rathor',
        contact:'1234567890',
        adress:'parda,manasa(MP)'
    })
}
//named export
exports.parentsDataConttroller = parentsDataLogic;
