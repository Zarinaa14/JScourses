const http = require('http');

const { start, pdf, notFound} = require('./controllers');
const port = 3000;

const server = http.createServer( (req, res) => {
     if(req.url === '/'){
        start(req, res);
    }else if(req.url.startsWith('/pdf')){
        pdf(req, res);
    }else{
        notFound(req, res);
    }
}).listen(port, () => console.log('Server has running on port 3000!'));

