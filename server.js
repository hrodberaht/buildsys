var express = require("express");
var path = require("path");
//require('./app_server/api/models/db'); // uncoment if you use MONGODB and install mongoose

var app = express();

app.use('/public',express.static(path.join(__dirname, '/public')));
app.use('/bower_components/',express.static(path.join(__dirname, '/bower_components')));
app.set('views', path.join(__dirname, 'app_server/client/views'));
app.set('view engine', 'ejs');

var client = require("./app_server/client/routes/route");
var api = require("./app_server/api/routes/route");

app.use("/api", api);
app.use('/', client);



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
   
    console.log("Serwer start's");
    
});