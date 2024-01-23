const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const tableSchema= new Schema({
    tablenumber:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Table',tableSchema);
