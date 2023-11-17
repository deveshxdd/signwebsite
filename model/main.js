const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/signup').then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log("db not conneted");
})
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
        
    },
})
const user = new mongoose.model('user',userschema)
module.exports = user