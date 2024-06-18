//single Inheritance
class A{
    //properties
    a = 10;

    //constructor
    constructor(){
        console.log("A class constructor")
    }

    //methods
    aMethod(){
        console.log("hello from aMethod")
    }
} 
class B extends A{
    //properties
    b = 40;

    //constructor
    constructor(obj){
        super();

        console.log(`hello ${obj}, from B class constructor`)
    }
    
    //methods
    bMethod(obj){
        console.log(`hello from bMethod`)
    }
} 
let obj = new B('anjali');
obj.bMethod();
obj.aMethod();
console.log(obj.a+obj.b)

