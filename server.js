const express = require('express')
const app = express();
const config = require('./config');

const port = 5000;


app.use(express.json()); 
app.use(express.urlencoded({ extended:true }));