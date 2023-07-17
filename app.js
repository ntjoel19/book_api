const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const logger = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user");
const app = express();

const path = require("path");
const dotenv = require("dotenv");

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(express.json());

mongoose.connect("mongodb+srv://"  + 
                process.env.DB_USER + ":" + 
                process.env.DB_PASSWORD + 
                "@cluster0.kwpeuu4.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/auth", userRoutes);

module.exports = app;