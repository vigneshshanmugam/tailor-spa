const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    const jsHeader = {'Content-Type': 'application/javascript'};
    switch(pathname) {
        case '/public/bundle.js':
            res.writeHead(200, jsHeader);
            return fs.createReadStream('./public/bundle.js').pipe(res); 
        case '/public/1.bundle.js': 
            res.writeHead(200, jsHeader);
            return fs.createReadStream('./public/1.bundle.js').pipe(res); 
        case '/public/2.bundle.js': 
            res.writeHead(200, jsHeader);
            return fs.createReadStream('./public/2.bundle.js').pipe(res); 
        case '/css/app.css': 
            res.writeHead(200, {'Content-Type': 'text/css'});
            return fs.createReadStream('./css/app.css').pipe(res);
        case '/favicon.ico': 
            res.writeHead(200, {'Content-Type': 'image/x-icon'} );
            return res.end('');
        default:
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Link': `<http://localhost:8081/css/app.css>;rel="stylesheet",` +
                        `<http://localhost:8081/public/bundle.js>; rel="fragment-script"`
            });
            return res.end(``);
    }
    
});

server.listen(8081, () => {
    console.log('SPA Fragment Server started at 8081');
});