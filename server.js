/// DEPENDENCIES 
const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const indexController = require('./controllers/index.js')
const admin = require('firebase-admin')

//Initiialize Express
const app = express();
const mongoose = require('mongoose')

//configure application settings
require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;


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
app.use('/api', indexController)

app.get('/api/*', (req, res) => {
    res.status(404).json({message: 'That route was not found'})
});

// Tell App to listen
app.listen(PORT, () => 
console.log('listening on PORT ' + PORT))