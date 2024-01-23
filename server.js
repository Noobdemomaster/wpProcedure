const path=require('path')
const express= require('express');
const bodyParser=require('body-parser');
const mongodb=require('mongodb');
const mongoose=require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongodb_uri= "mongodb+srv://generalpurpose139:SRHyuqMOp3HMAAqb@trial1.lanj6ar.mongodb.net/?retryWrites=true&w=majority";
const menuController=require("./controller/menu");
const staffController=require("./controller/staff.js");


const app=express();

app.use(bodyParser.json()); // use this for rest API
app.use(express.static(path.join(__dirname, 'public')));

const menuRoute= require("./router/menuRouter.js");
const staffRoute=require("./router/staffRouter.js");


app.use('/',menuRoute);
app.use(staffRoute);



mongoose.connect(mongodb_uri)
.then(result=>{
    app.listen(3001, console.log("server connected"));
    
})
.catch(err=>{
    console.log(err)
})


