const path=require('path');
const express=require('express');

const staffController=require('../controller/staff');

const router=express.Router();

router
.route('/staff')
.post(staffController.postStaff);

router
.route('/admin')
.post(staffController.postSAdmin);

module.exports=router;