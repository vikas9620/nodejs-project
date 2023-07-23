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
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    
    fs.readFile('form_data.txt', 'utf8', (err, data) => {
      let messages = [];
      if (!err && data) {
        messages = data.trim().split('\n');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h2>Messages:</h2>
        <ul>
          ${messages[messages.length - 1]}
        </ul>
        <form method="post" action="/">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name">
          <input type="submit" value="Submit">
        </form>
      `);
    });
  } else if (req.method === 'POST') {

    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const formData = new URLSearchParams(data);
      const name = formData.get('name');

      fs.appendFile('form_data.txt', `${name}\n`, err => {
        if (err) {
          console.error('Error writing to file:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(302, { 'Location': '/' });
          res.end();
        }
      });
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
