const mydb = require('./mydb');

function selectFirstName(firstName, done){
   mydb.getConnection((error, connection) => {
        if(error){               
            done(new Error(`Error: ${error.message}`));
            return;
        }
   let query = "select id, firstname, lastname, image from user where firstname = ?";
   connection.query(query, firstName, (error, rows) => {
            if(error){       
                done(new Error(`Error: ${error.message}`));  
                return;
            }                 
            if(rows && rows[0] !== undefined)
                {                      
                    done(null, rows);
                }
            else
                {                         
                    done(new Error('User is not found.'));
                }
            connection.release();
        });
   });
}
module.exports = selectFirstName;
