var express = require("express");
var path = require("path");
var compression = require("compression");
var app = express();
var port = process.argv[2] || 3000;

app.use(compression());

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname));

app.listen(port, function() {
    console.log("hosting server on port " + port);
});
