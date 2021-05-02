var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var viewsPath = path.join(__dirname, '/node/views')

app.use(express.static(viewsPath));

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

app.use('/electricPoints', function (req, res) {
    res.json({
        "blah" : "blah"
    })
});

module.exports = app