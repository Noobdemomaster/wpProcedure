const table=require('../model/table');
const menu=require('../model/menu');

exports.postMenu=(req,res,next)=>{
    const foodname= req.body.foodname;
    const receipe= req.body.receipe;
    const fProcedure= req.body.fProcedure;
    const remarks= req.body.remarks;

    const Menu=new menu({
        foodname: foodname,
        receipe: receipe,
        fProcedure: fProcedure,
        remarks: remarks
    });
    Menu.save()
    .then(result=>{
        console.log('data uploaded');
        res.send('data uploaded');
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postTable=(req,res,next)=>{
    const tablenumber = req.body.tablenumber;
    
    const Table=new table({
        tablenumber: tablenumber
    });
    Table
    .save()
    .then(result=>{
console.log(result)
res.send("data uploaded successfully");
    })
    .catch(err=>{
        console.log(err);
    })
}
 

