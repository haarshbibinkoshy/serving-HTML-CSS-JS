const express = require('express')
const path = require('path')
const router=express.Router()

const rootDir=require('../util/path')

router.post(`/success`,(req, res, next) =>{
    res.sendFile(path.join(rootDir,`views`,`success.html`))
})

module.exports= router