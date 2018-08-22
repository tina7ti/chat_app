var socket = io.connect("http://localhost:8000"); 

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var output= document.getElementById("output");
var feedback= document.getElementById("feedback");
var btn = document.getElementById("send");

btn.addEventListener("click",function(){
	socket.emit("chat",{message:message.value,handle:handle.value});
});

message.addEventListener("keypress",function(){
	socket.emit("typing",handle.value);
});

socket.on("chat",function (data) {
	output.innerHTML+='<p><strong>' + data.handle + ': </strong>' + data.message + ' <hr></p>';
	feedback.innerHTML ='';
});

socket.on("typing",function (data) {
	feedback.innerHTML ='<p><em>' + data+' is typing a message ...<em></p>';
});