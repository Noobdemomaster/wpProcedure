const staff = require('../model/staff');
const superadmin=require('../model/superAdmin');

exports.postStaff=(req,res,next)=>{
    const name= req.body.name;
    const emailID= req.body.emailID;
    const password= req.body.password;
    const title= req.body.title;
    const dob= req.body.dob;

const Staff=new staff({
    name: name,
    emailID: emailID,
    password: password,
    title: title,
    dob: dob
})
Staff.save()
.then(result=>{
console.log('data saved');
res.send('data uploaded successfully');
})
.catch(err=>{
    console.log(err)
});
}

exports.postSAdmin=(req,res,next)=>{
    const name =req.body.name;
    const emailID=req.body.emailID;
    const password=req.body.password;

 const admin=new superadmin({
    name: name,
    emailID: emailID,
    password: password
 })
 admin.save()
 .then(result=>{
    res.send('data uploaded');
 })
 .catch(err=>{
    console.log(err);
 })
}


