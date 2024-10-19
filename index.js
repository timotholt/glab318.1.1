console.log("Hello World");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(    
        `Request for ${req.url} by method ${req.method}`
    );
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 


server.on('request', (req, res) => {
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write('<p>I wonder what else we can send...</p>');
      res.end();
    } else if (req.url === '/hero') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1 style="color: blue">Superman wears blue!</h1>');
      res.end();
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });
