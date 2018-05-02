'use strict';
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/public'));   		//CSS tiedostoon yhteys
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, resp){
	
	//Liitetään index.html tiedosto	
	fs.readFile('./index.html',null, function(error, data){
		
		if (error){
			resp.writeHead(404);
			resp.write('File not found!');			
		}else {			
			resp.write(data);		
			console.log("index.html found!");
		}
		resp.end();		
	});
})

app.listen(1337, function(){				//avataan selaimen localhost:1337
	console.log("Server started on port 1337");	

})
