const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    email: {

        type: String,   
        required: true,

        unique:true,
        
       
       
    }
    ,username:{
        type:String,
        required:true,
       
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
        
    },
    phone_no:{
        required:true,
        type:String,

    },
    created_on:{
        // timestam: { type: Date, default: Date.now},
        type:Date,
        default:Date.now,
    }

})

const UserDetails = new mongoose.model("UserDetail",UserSchema);
module.exports=UserDetails;
