

//named export
//1 exports.something
//2. module.exports

module.exports = {

    //p:v
    name:"teacher",

    //mixins: [],

    settings: {},

    dependencies: [],

    actions:{

        create:{
            rest:{
                method: "POST",
                path:"/create"
            },
            async handler(ctx){
                console.log(ctx.params.name)
                return "hello! from teacher service " + ctx.params.name
            }
        }
    },

    events:{},

    methods:{},

    //methods

    //life cycle Methods
    created(){
        console.log("teacher created");
    },

    async started(){
        console.log("teacher started");
    },

    async stopped(){
        console.log("teacher stopped");
    }
}