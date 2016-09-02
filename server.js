var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'ejs');

var dir = express.static(__dirname + '/public');

app.use(dir);

app.get('/', function(request, response){
	response.render('pad');
});

app.listen(port);




