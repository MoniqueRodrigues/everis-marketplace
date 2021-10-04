const express = require('express')
const app = express();
const port = 8080;
var path    = require("path");

app.get('/',function(req,res){  
    res.sendFile(path.join(__dirname+'/html/index.html')); 
 });

 app.listen(port, () => console.log(`Example app listening on port ${port}!`))