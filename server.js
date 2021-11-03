/// DEPENDENCIES 
const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const indexController = require('./controllers/index.js')
const userController = require('./controllers/user.js')
const admin = require('firebase-admin')




//Initiialize Express
const app = express();
const mongoose = require('mongoose');
const { auth } = require('firebase-admin');

//configure application settings
require('dotenv').config();
const { DATABASE_URL, PORT = 3001, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_ID } = process.env;


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
    credential: admin.credential.cert({
            "type": "service_account",
            "project_id": "dinnerbell-a5fdf",
            "private_key_id": PRIVATE_KEY_ID,
            "private_key": PRIVATE_KEY.replace(/\\n/g, '\n'),
            "client_email": "firebase-adminsdk-i6gud@dinnerbell-a5fdf.iam.gserviceaccount.com",
            "client_id": CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i6gud%40dinnerbell-a5fdf.iam.gserviceaccount.com"
          })
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
app.get('/api', (req, res) => {
    res.json({message: 'Welcome to the React CRM API'})
});


app.use('/api/menu', indexController)

app.use('/api/user', userController)

app.get('/api/*', (req, res) => {
    res.status(404).json({message: 'That route was not found'})
});

// Tell App to listen
app.listen(PORT, () => 
console.log('listening on PORT ' + PORT))