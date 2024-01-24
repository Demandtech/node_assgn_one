module.exports = {
  handleRoot: (req, res) => {
    switch (req.method) {
      case 'GET':
        res.statusCode = 200;
        res.write('Name --> Rasheed Adekunle');
      default:
        res.statusCode = 405;
        res.write('Method not allowed');
        break;
    }
  },

  handleBooks: (req, res) => {
    switch (req.method) {
      case 'GET':
        res.statusCode = 200;
        res.write('You are using a GET METHOD on books');
        break;
      case 'PUT':
        res.statusCode = 200; //204
        res.write('You are using PUT METHOD on books');
        break;
      case 'DELETE':
        res.statusCode = 200; //204;
        res.write('You are using DELETE METHOD books');
        break;
      default:
        res.statusCode = 405;
        res.write('Method not allowed');
        break;
    }
  },

  handleAuthor: (req, res) => {
    switch (req.method) {
      case 'GET':
        res.statusCode = 200;
        res.write('You are using a GET METHOD on books/author');
        break;
      case 'PUT':
        res.statusCode = 200; //204;
        res.write('You are using PUT METHOD on books/author');
        break;
      case 'DELETE':
        res.statusCode = 200; //204;
        res.write('You are using DELETE METHOD books/author');
        break;
      default:
        res.statusCode = 405;
        res.write('Method not allowed');
        break;
    }
  },
};
