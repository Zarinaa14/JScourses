const fs = require('fs');
const path = require('path');
const url = require('url');


const selectFirstName = require('../public/lib/selectFirstName');
const newPDF = require('../public/lib/newPDF');

function pdf(req, res){
    const parsedUrl = url.parse(req.url, true);
    const firstName = parsedUrl.query.firstName;   

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    

    let result = true;
    selectFirstName(firstName, (error, users) =>{
        if(error){           
            result = false;
            res.end(`${JSON.stringify(result)} / ${error.message}`);
        }
        else
        {
            newPDF(users[0], (error, resultUpdate)=>{
                if(error){                    
                    result = false;                    
                    res.end(`${JSON.stringify(result)} / ${error.message}`);
                }
                else
                {                    
                    res.end(JSON.stringify(result));    
                }  
            });      
        }
    
    });  
       
}
module.exports = pdf;