import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//const app = express();
//const express = require('express');
//const path = require('path');
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));
});

app.listen(3000,()=>{
    console.log('Server is Running on port http://localhost:3000');
})