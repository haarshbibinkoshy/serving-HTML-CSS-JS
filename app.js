const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const adminRoute=require('./routes/admin')
const contactUsRoute=require('./routes/contactUs')
const shopRoute=require('./routes/shop')
const successRoute=require('./routes/success')

const path = require('path')
app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoute)
app.use(shopRoute)
app.use(contactUsRoute)
app.use(successRoute)
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname,`views`,`404.html`))
})
app.listen(3000)
