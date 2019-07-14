require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require("path");
const routes = require('./routes/navigation');
const subscribe = require('./routes/subscribe');
const app = express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))

//Middleware
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// Routing
app.use('/', routes);
app.use('/s', subscribe);


module.exports = app;