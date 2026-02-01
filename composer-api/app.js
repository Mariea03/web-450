var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/composers', indexRouter);



app.use((req, res, next) => {
    res.status(error.status || 500).json({
        type: 'error',
        status: res.status || 500,
        message: error.message,
        stack: req.app.get('env') === 'development'? err.stack : undefined
    })
});

module.exports = app;
