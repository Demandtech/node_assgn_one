const http = require('http');
const behavior = require('./behavior');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      behavior.handleRoot(req, res);
      break;
    case '/books':
      behavior.handleBooks(req, res);
      break;
    case '/books/author':
      behavior.handleAuthor(req, res);
      break;
    default:
      res.write('Not found');
      break;
  }
  res.end();
});

server.listen(8900);
