const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const menuSchema=new Schema({
    foodname:{
         type:String,
          required:true
    },
    receipe:{
        type:String,
        required:true
    },
    fProcedure:{
        type: String,
        required:true
    },
    remarks:{
        type:String
    }
});

module.exports=mongoose.model('menu',menuSchema);