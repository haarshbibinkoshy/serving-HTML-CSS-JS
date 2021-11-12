const path = require('path')
const express = require('express')

const router=express.Router()

const rootDir=require('../util/path')
const productController=require('../controllers/products')

router.get(`/`,productController.shopGet)



module.exports= router