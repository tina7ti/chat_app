var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(8000, function(){

	console.log("the server is listening on the post 8000");

});

app.use(express.static('public'));

var io = socket(server);

io.on('connection',function(socket){

	console.log(socket.id);

}); 