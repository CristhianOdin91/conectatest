var mongoose = require('mongoose');
var Schema = require('../schemas/libro_schema');
var Model = mongoose.model('Libro',Schema);

module.exports = Model;