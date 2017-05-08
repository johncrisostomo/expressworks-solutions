var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var result = {};
    
    Object.keys(req.query).forEach(function (key) {
        result[key] = req.query[key];
    });
    
   res.send(JSON.stringify(result)); 
});

app.listen(process.argv[2]);