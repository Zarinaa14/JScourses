const fs = require('fs');
const path = require('path');
function start(req, res){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    const stream = fs.createReadStream(path.resolve('public', 'index.html'));

    stream.pipe(res);

}
module.exports = start;