const express = require('express');
const create = require('./create');
const findOne = require('./findOne');
const findMany = require('./findMany');
const update = require('./update');
const remove = require('./remove');

const productRoute = express.Router();

productRoute.use('/create', create(productRoute));
productRoute.use('/findOne', findOne(productRoute));
productRoute.use('/findMany', findMany(productRoute));
productRoute.use('/update', update(productRoute));
productRoute.use('/remove', remove(productRoute));

module.exports = productRoute