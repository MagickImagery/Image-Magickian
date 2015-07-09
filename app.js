var express = require('express');
var morgan  = require('morgan');
var app     = express();
var im 			= require('imagemagick')
var multer 	= require('multer');
var im			= require('imagemagick');
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

app.post('/resize', function(req, res){
	

	var path = "./uploads/"+req.body.image;

	if (req.body.size === 'small'){
		var size = 200;
	}
	else if (req.body.size === 'medium') {
		var size = 400;
	}
	else {
		var size = 600;
	}
	im.convert([path, '-resize', size+'x'+size, path ], function(err, stdout){
		console.log(err)
		res.json({stdout: stdout, image: req.body.image })
	})
})
app.listen(port);
