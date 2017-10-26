var fs = require('fs');
var open = require("open");
open("http://127.0.0.1:3000/");

module.exports = function handler(req, res) {
	if (req.url == '/') {
		fs.readFile('no-such-file', function(err, content) {// 'no-such-file' __dirname + '/index.html'
			if (err) throw err; // JSON.parse("invalid!")
			res.end(content);
		});
	} else {
	res.statusCode = 404;
	res.end("Not Found");
	}

};
