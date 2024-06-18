
console.log("Starting");
//function defination
async function myfunc(){         //async function always return po 
    let po = new Promise((resolve, reject)=>{
        
        // producing code
        setTimeout(()=>{
            resolve({
                name:"anjali",
                surname:"rathor"

            });
        },3000)
        
    }) 
    let x = await po;          //await always wait for po

    console.log(x.name);
}

myfunc();