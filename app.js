/*const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
if(url === '/') {
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  res.write('</html>');
  return res.end();
}else if (url === '/home') {
  res.write('<html>');
  res.write('<head><title>home</title></head>');
  res.write('<body><h1>Welcome home</h1></body>');
  res.write('</html>');
  return res.end();
  } else if (url === '/about') {
    res.write('<html>');
  res.write('<head><title>about us</title></head>');
  res.write('<body><h1>Welcome to About Us page</h1></body>');
  res.write('</html>');
    return res.end();
  } else if (url === '/node') {
    res.write('<html>');
  res.write('<head><title>node</title></head>');
  res.write('<body><h1>Welcome to my Node.js project</h1></body>');
  res.write('</html>');
    return res.end();
  } else {
    res.end('Page not found');
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/
const http = require('http');

const routes = require('./router');
const server = http.createServer(routes);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
