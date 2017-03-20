var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log("request received");
	res.sendFile(__dirname + "/" + "index.html");
})

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address(). port

	console.log("GM Tools app listening at http://%s:%s", host, port)
})