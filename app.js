const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products.js');
const ordertRoutes = require('./api/routes/orders.js');


app.use('/products', productRoutes);
app.use('/orders', ordertRoutes);
module.exports = app;