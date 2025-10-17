const http = require('http');
const fs = require('fs');
const url = require('url');

const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`)
const product1 = fs.readFileSync(`${__dirname}/webpages/product1.html`)
const product2 = fs.readFileSync(`${__dirname}/webpages/product2.html`)
const product3 = fs.readFileSync(`${__dirname}/webpages/product3.html`)

const server = http.createServer((req, res) => {

  const {pathname,query} = url.parse(req.url, true)
  if (pathname === '/' || pathname === '/home') {
    res.end(indexPage);
  } else if (pathname === '/product') {
      if (query.id === "1") {
        res.end(product1);
      } else if (query.id === "2") {
        res.end(product2);
      } else if (query.id === "3") {
        res.end(product3);
      } else {
        res.writeHead(404)
        res.end('404 Product Not Found');
      }
  } else {
    res.writeHead(404)
    res.end('404 Page Not Found');
  }
})

server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080');
})