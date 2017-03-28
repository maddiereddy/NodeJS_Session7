var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  var num = process.argv[2]; //get num from command line input

  if (num % 2 === 0 ) {
  	console.log("In Console: Given number" + " " + num + " "+ "is even number");
  	response.end("In Browser: Given number" + " "+ num + " "+"is even number");
  } else {
  	console.log("In Console: Given number" +" "+ num + " "+"is odd number");
  	response.end("In Browser: Given number" + " " + num + " "+ "is odd number");
  }

});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");

//to run: node assignment2.js 35