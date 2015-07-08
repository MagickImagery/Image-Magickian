var express 		= require('express');
var app 				= express();
var im 					=	require('imagemagick');
var port 				= 3000;

app.listen(port);
app.use(morgan('combined'));
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use('view render', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});