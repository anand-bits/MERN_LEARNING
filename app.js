require ('dotenv').config()
const express= require("express")
const connectToDb= require('./config/db.js')
const cors= require("cors");
const { home } = require('./controllers/userController.js');
const app= express();


//Intialization of Database.
connectToDb()


//express Created  Middleware---------------------------------
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// Calling the home user routes from routes folder.....-------------->
//Actually what to do is written in COntroller and from controller , routes get the and From the routes the app.js is getting...-------->
const userRoutes=require('./Routes/userRoutes.js')
app.use('/',userRoutes)



module.exports= app;

