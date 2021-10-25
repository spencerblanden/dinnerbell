/// DEPENDENCIES 
require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;
const express = require('express');
const { Mongoose } = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const indexController = require('./controllers/index.js')

//Initiialize Express
const app = express();
const mongoose = require('mongoose')

//configure application settings


//connect to mongoDB
mongoose.connect(DATABASE_URL);


//Set up mongoDB listeners
const db =mongoose.connection;
db.on('err',(err) => console.log(err.message + 'mongoose not working'))
db.on('connected', () => console.log('mongoose connected'))
db.on('disconnected', () => console.log('mongoose disconnected'))

//Mount Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//Mount Routes
app.use('/home', indexController)

// Tell App to listen
app.listen(PORT, () => 
console.log('listening on PORT ' + PORT))