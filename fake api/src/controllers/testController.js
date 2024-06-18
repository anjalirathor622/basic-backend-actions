let testController = (req,res)=>{
    function getRamdomDateInBetween(start, end) {
        //start = Date.parse(2021-01-01);
        //start = Date.parse('2022-07-30');
       // end = Date.parse('2022-08-15');
       //7 day before
       var date1 = new Date();
        var start=  date1.setDate(date1.getDate() - 7);
        // console.log(start)

       //var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
       //after 7 day
       const date2 = new Date();
         var end=  date2. setDate(date2. getDate() + 7)
        //console.log(end)
    
         let date3=new Date(Math.floor(Math.random() * (end - start + 1) + start));
         //const unixTimestamp = Math.floor(date.getTime() / 1000);
         const unixTT=Math.floor(date3);
        return unixTT;
       //return date2;
    }
    let names = ['anjali','kiran','Abhishek','Pankaj','Pushpendra','Shivkanya','Ruchika','Anil','Gunjan','Shekhar'];
    //Controller Logic Functions

    if( Math.random() > 0.5 ?true:false){
        //True
        var ordersArray = [];
        /*
            for (initialization; conditions; increment/decrement) {
                // code block to be executed
            }
        */
        for(var i = 1;i <= Math.ceil(Math.random()*20); i++){
            let order = {
                "customer":names[Math.floor(Math.random() * names.length)],
                "order_id": Math.ceil(Math.random() * (99999 - 1000) + 1000),
                "arrives_at_utc": getRamdomDateInBetween(),
                "paid_with": Math.random() < 0.5? "Cash":"Wallet",
                "total_paid": parseFloat((Math.random() * (99.00 - 10.00) + 10.00).toFixed(2)),
                // "test":Math.ceil(Math.random()*20)

               
            }
            
            ordersArray = [
                ...ordersArray, // ... spread operator
                order
            ]
        }
         res.status(200).json({
            orders:ordersArray
        })
    }else{
        res.status(503).send();
    }
}

exports.testController = testController;