const express = require('express')
const app = express()
const routes = require('./routes/main')
const routesr = require('./routes/signup')
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")

app.use('/main',routes)
app.use('/post',routesr)
app.use('/post',routesr)




app.listen(7001,()=>{
    console.log("server started")
})