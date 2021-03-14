var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
  var query = url.parse(request.url, true);
  console.log(query);
  var filename = "." + query.pathname;
  console.log(filename);

    if (filename === `./`) {
        filename = `./index.html`;
    }
    else if (filename === `./about`) {
        filename = `./about.html`;
    } 
    else if (filename === `./contact-me`) {
        filename = `./contact-me.html`;
    }
    else {
        filename = `./404.html`;
    }

  fs.readFile(filename, function(err, data) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      return response.end("404 Not Found");
    } 
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
}).listen(8080);