const express = require('express')
const {userprofile} = require('../controller/post')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('signup')
})
route.post('/', userprofile 
)




module.exports = route