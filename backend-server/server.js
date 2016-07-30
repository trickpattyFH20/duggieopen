var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');
var fs = require('fs');

app.use('/node_modules', express.static(__dirname + '../node_modules'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', express.static(__dirname + '../dist'));
app.use('/*', express.static(__dirname + '../dist'));

// var pkey = fs.readFileSync('key.pem');
// var pcert = fs.readFileSync('cert.pem')

// var options = {
//     key: pkey,
//     cert: pcert
// };

http.createServer(app).listen(8080);
// https.createServer(options, app).listen(443);
