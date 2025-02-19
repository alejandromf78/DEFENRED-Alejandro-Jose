const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    if (req.url === "/" || req.url === "index.html") {

        fs.readFile("index.html", (error, datos) => {
            if (error) {
                res.writeHead(500);
                res.end("Error del servidor!!!");
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(datos);
                res.end();
            }
        })
    }
    if (req.url ==="/contacto") {

        fs.readFile("contacto.html", (error, datos) => {
            if (error) {
                res.writeHead(500);
                res.end("Error del servidor!!!");
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(datos);
                res.end();
            }
        })
    }
}).listen(8080);