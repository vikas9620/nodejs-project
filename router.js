/*const fs = require('fs');
const requestHandler = (req, res) => {
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
  
      let data = [];
      req.on('data', chunk => {
        data.push(chunk);
      });
  
      req.on('end', () => {
        const formData =Buffer.concat(data).toString();
        const name = formData.split('=')[1];
  
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
  }
/*exports.handler = requestHandler
module.exports = {
    handler: requestHandler
}
  module.exports = requestHandler

  */