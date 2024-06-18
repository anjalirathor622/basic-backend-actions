const { mongoose } = require("../config/db");
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        description:'please enter your firstname'
    },
    lastname:{
        type: String,
        required: true,
        description:'please enter your lastname'
    },
    email:{
        type: String,
        required: true,
        description:'please enter your email'
    },
    username:{
        type: String,
        required: true,
        description:'please enter  valid username'
    },
    password_hash:{
         type: String,
        required: true,
        description:'please enter correct password'
    },
    role:{
        type: String,
        enum: ['admin', 'teacher','student'],
        default:'student',
        //required: true,
    },
    //token:token    
},
{
    timestamps: true
})
/*userSchema.virtual('password')
  .set(function (password) {
    this.salt = crypto.randomBytes(32).toString('base64');
    this.password_hash = this.encryptPassword(password, this.salt);
  })
  .get(function () {
    return this.password_hash;
  });*/

const User = mongoose.model("User",userSchema);

const studentShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    }

},{
    timestamps: true
});

const Student = mongoose.model('Student',studentShema)

const teacherShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    }

},{
    timestamps: true
});

const Teacher = mongoose.model('Teacher',teacherShema);

const adminShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    }

},{
    timestamps: true
});

const Admin = mongoose.model('Admin',adminShema)

module.exports = {User,Student,Teacher,Admin}