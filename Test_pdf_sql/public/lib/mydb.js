const mysql = require('mysql');
let mydb = mysql.createPool({
    connectionLimit   :10,
    host              : 'localhost',
    user              : 'root',
    password          : '1111',
    database          : 'mydb',    
    waitForConnections: true
    

});

module.exports = mydb;