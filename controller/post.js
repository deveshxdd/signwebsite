const express = require('express')
const user = require('../model/main')
async function userprofile(req,res){
const body = req.body
console.log(body)
if(!body.name){
   return res.status(400).send("enter full detail")
}
if(!body.email){
   return res.status(400).send("enter full detail")
}
if(!body.password){
   return res.status(400).send("enter full detail")
}
await user.create({
    name:body.name,
    email:body.email,
    password:body.password
    
})
res.render('main')

}
module.exports = {userprofile}

