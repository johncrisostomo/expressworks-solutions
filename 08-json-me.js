var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
   fs.readFile(process.argv[3], function(err, file) {
        if (err) {
           return err;
        }
        
        res.send(JSON.stringify(JSON.parse(file)));
   }); 
});

app.listen(process.argv[2]);