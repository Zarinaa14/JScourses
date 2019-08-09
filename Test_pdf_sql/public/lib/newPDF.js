const mydb = require('./mydb.js');
const fs = require('fs');
const PDF = require('pdfkit');

function newPDF(user, done){
     mydb.getConnection((error, connection) => {
        
        let doc = new PDF();    
        doc.image(user.image)
            .text(`${user.firstname}  ${user.lastname}`);   
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));    
        doc.on('end', () => {
            let file = {
                data: Buffer.concat(buffers)
            };

            let query = "update user set pdf = ? where firstname = ?";

            connection.query(query, [file.data, user.firstname], (error, result) => {

                connection.release();
                done(null, result);            
            });
            
        });

        doc.pipe(fs.createWriteStream(`./pdf/${user.firstname}_${user.lastname}.pdf`));
        doc.end();            
    });      
}

module.exports = newPDF;