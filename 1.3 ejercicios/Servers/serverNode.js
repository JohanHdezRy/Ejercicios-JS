import http from 'http';
import URL  from 'url';

 const hostname = '127.0.0.1';
 const port = 3000;

 const server = http.createServer((req, res) => {
    const parsedUrl = URL.parse(req.url, true);
    if(parsedUrl.pathname === '/' && req.method ==='GET'){
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end('<h1>Bienvenido a mi pagina web</h1>');
    }else if(parsedUrl.pathname === '/about' && req.method ==='GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Acerca de mi</h1>');
    }else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('<h1>Not found</h1>')};
    });

    server.listen(port,hostname,() =>{
        console.log(`Servidor corriendo en http://${hostname}:${port}/`);
    });