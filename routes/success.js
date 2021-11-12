const express = require('express')

const router=express.Router()

const productController=require('../controllers/products')

router.post(`/success`,productController.getSuccess)

module.exports= router