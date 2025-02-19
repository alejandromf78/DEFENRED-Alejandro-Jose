const http= require("http");
const variable= "Hola mundo!";
http.createServer((req, res)=> {
    res.writeHead(200,{'content-type': 'text/html'});
    res.write(`
    <html>
        <head>
        </head>
        <body>
            ${variable}
        </body>
    `);
    res.end();
}).listen(8080);