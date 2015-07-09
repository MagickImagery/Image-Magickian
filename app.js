var express = require('express');
var morgan  = require('morgan');
var app     = express();
var multer 	= require('multer');
var port    = 3000;

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(multer({
	dest: './uploads/',
	onFileUploadComplete: function(file, req, res) {
		console.log(file);
		res.json(file);
	}
}));


app.use(express.static('uploads'));
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


app.post('/uploads', function(req, res){
})


app.listen(port);
