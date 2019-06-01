"use strict"
const express = require('express');
const path = require('path');
const app = express()

app.get('/test',(req,res)=>{
    return res.status(200).json({"status":"HEALTHY"}) 
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.use(express.static('public'));

app.listen(2003,()=>{
  console.log("code is working fine ..... on 2003");
})