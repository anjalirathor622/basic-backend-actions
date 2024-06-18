console.log('its working');


class MyClass{
    //property

    //constracter

    //methods
    function1(){
        console.log('hello');
    }
}


let obj = new MyClass();

obj.function1();

//produsing code
let po = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let name = 'anjali'
        resolve({
            "msg":`hello from ${name}`
        });
    },2000)
});


//consuming code

po.then((suc)=>{
    console.log('hello!',suc);
}
).then().catch((err)=>{
    console.log('catched error!!',err);
}

).finally();

