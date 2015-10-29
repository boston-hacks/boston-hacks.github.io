var fs = require("fs");
var html = "";

fs.readdirSync('./public/prizes.json').forEach(function(name){

})
fs.writeFile('./public/prizes.txt', html, function(err){
	if (!err) {
		console.log("saved!");
	}
})
