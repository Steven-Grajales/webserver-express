const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let objeto = {
        nombre: 'Steven',
        ciudad: 'Antioquia - Colombia',
        url: req.url
    }

    res.write(JSON.stringify(objeto));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');