const path=require('path');

const express=require('express');

const menuController=require('../controller/menu');

const router=express.Router();



router
.route('/tableno')
.post(menuController.postTable);

router.post('/menu',menuController.postMenu);


module.exports=router;