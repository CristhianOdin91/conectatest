var mongoose = require('mongoose');

mongoose.connect('127.0.0.1','libreria');

mongoose.Promise = global.Promise;