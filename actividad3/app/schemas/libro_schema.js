var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	titulo: {
		type: String,
		required: 'El título del libro es requerido',
		maxlength: [80,'El título del libro es muy grande']
	},
	autor: {
		type: String,
		required: 'El autor del libro es requerido',
		maxlength: [80,'El autor del libro es muy grande']
	},
	editorial: {
		type: String,
		maxlength: [80,'La editorial del libro es muy grande']
	},
	anio: {
		type: Number,
		maxlength: [5,'Año de publicación no válido']
	},
	num_paginas: {
		type: Number
	}
});

module.exports = schema;