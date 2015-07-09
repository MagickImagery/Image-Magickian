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
	

	var srcPath = "./uploads/"+req.body.image;

	// updates the filename so when it gets pushed back down
	// the browser knows to refresh the cache
	var updatedFileName = "resize_" + req.body.image;
	// saves to the same folder
	var destPath = "./uploads/" + updatedFileName;

	// handler for different resize buttons
	if (req.body.size === 'small'){
		var size = 200;
	}
	else if (req.body.size === 'medium') {
		var size = 400;
	}
	else {
		var size = 600;
	}
	// this is the magicK VVVV
	im.convert([srcPath, '-resize', size+'x'+size, destPath], function(err, stdout){
		// ^^^^ the magick is over
		console.log(err)
		res.json({stdout: stdout, image: updatedFileName})
	})

	app.post('/crop', function(req, res) { 
		// req will have some attributes once the client side handler is written
	})
})
app.listen(port);
