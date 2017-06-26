var express = require('express');
var db = require('./app/database/local');
var bodyParser = require('body-parser');
var web_routes = require('./routes/web')
var api_routes = require('./routes/api');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','pug');

app.use('/',web_routes);
app.use('/api/v1',api_routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
        let error = err.stack;
        res.json({ error });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
    let error = err.stack;
    res.json({ error });
});

module.exports = app;