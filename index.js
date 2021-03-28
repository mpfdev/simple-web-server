const http = require('http');

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2021-03-28',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2021-03-28',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2021-03-28',
    important: true,
  },
];

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(notes));
});

const PORT = 8000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
