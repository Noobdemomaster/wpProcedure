const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const staffSchema= new Schema({
    name:{
        type:String,
        required: true
    },
    emailID:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:['chef','line cook','server'],
    //default:'chef'   you can put default value in enum
        required:true
    },
    dob:{
        type:Date,
        required: true
    },

});

module.exports=mongoose.model('staff',staffSchema);
