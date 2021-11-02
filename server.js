/// DEPENDENCIES 
const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const indexController = require('./controllers/index.js')
const userController = require('./controllers/user.js')
const admin = require('firebase-admin')
var serviceAccount = require("./dinnerbell-a5fdf-firebase-adminsdk-i6gud-4df4b3b558.json");



//Initiialize Express
const app = express();
const mongoose = require('mongoose');
const { auth } = require('firebase-admin');

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

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

app.use(async function(req , res , next){
    const token = req.get('Authorization')
    
    if(token) {
    const authUser = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
    req.user = authUser
    }
    next()
})

function isAuthenticated(req, res, next) {
    if(req.user) return next();
    else res.status(401).json({message: 'unauthorized'});
}

//Mount Routes
app.use('/api', indexController)

app.use('/api/user', userController)

app.get('/api/*', (req, res) => {
    res.status(404).json({message: 'That route was not found'})
});

// Tell App to listen
app.listen(PORT, () => 
console.log('listening on PORT ' + PORT))