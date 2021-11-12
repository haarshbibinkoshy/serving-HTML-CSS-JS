const express = require('express')

const router=express.Router()
const path = require('path')
const productController=require('../controllers/products')

router.get(`/contactus`,productController.getcontactUs)

module.exports=router