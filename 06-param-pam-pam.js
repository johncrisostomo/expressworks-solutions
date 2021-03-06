var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {
    var payload = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');
    
   res.end(payload); 
});

app.listen(process.argv[2]);