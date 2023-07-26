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

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("in the middleware")
  next();
})
app.use((req, res, next) => {
  console.log("in another middleware")
  res.send('<h1>Hello from express</h1>');
})
app.listen(3000)