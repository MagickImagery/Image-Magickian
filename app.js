var express = require('express');
var morgan  = require('morgan');
var app     = express();
var port    = 3000;

app.use(morgan('combined'));
app.use(express.static('public'));

app.use(express.static('bower_components'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', function(req, res){
  res.render('index');
})


app.listen(port);