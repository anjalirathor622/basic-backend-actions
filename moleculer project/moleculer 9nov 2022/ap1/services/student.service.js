// named  exports

// exports.something
// module.exports

module.exports = {

    //p:v
    name:"student",

   // mixins: [],

    settings:{},

    dependencies: [],

    actions: {

        create:{
            rest:{
                method: "POST",
                path:"/create"
            },
            async handler(ctx){
                //console.log(ctx.params.name)
                return "hello! from student service " + ctx.params.name
                
            }
        }
    },

    events: {},

    methods:{},

    //methods
    //life cycle methods of student services
    created() {
        console.log("student created");
    },

    started(){
        console.log("student started");
    },

    stopped(){
        console.log("student stopped");
    }
}