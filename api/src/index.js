const express = require('express');

const app = express();

const product = require('./routes/product');

app.use('/product', product);


// Initialize server
const expressListRoutes = require('express-list-routes');
expressListRoutes(app, { prefix: '/' });

app.listen(3001)