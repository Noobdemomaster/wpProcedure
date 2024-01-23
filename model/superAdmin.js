const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const superAdminSchema= new Schema({
name:{
    type: String,
    required: true
},
emailID:{
    type:String,
    required: true
},
password:{
    type:String,
    required: true
}
});

module.exports=mongoose.model('superAdmin',superAdminSchema);
