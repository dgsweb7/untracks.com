var exec = require('exec');

function UtilController() {
}

UtilController.prototype.update = function(req, res) {

	exec(['git', 'pull'], function(err) {
	  if (err instanceof Error) {
		console.log(Error);
		res.end();
	  } else {
	  	console.log("running git pull to updated project ..")
	  	console.log("success!")
		res.setHeader('Content-Type', 'application/json');
	  	res.writeHead(200, {"Content-Type": "application/json"});
	  	res.end(JSON.stringify({ updated: true }));
	  }
	});

}


module.exports = new UtilController();

