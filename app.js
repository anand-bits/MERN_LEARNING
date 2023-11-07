require ('dotenv').config()
const express= require("express")

const connectToDb= require('./config/db.js')


const app= express();

connectToDb()

app.get('/',(req,res)=>
{
    res.send('Hello world')
})

module.exports= app;

