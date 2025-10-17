const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>adad ad</h1>')
  res.end()
})

server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080');
})