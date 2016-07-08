/**
 * GitController
 *
 * @description :: Server-side logic for managing gits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var KEY = process.env.GIT_SECRET_KEY;

command = function(command) {
	var sys = require('sys')
	var exec = require('child_process').exec;
	function puts(error, stdout, stderr) {sys.puts(stdout);}
	exec(command, puts);
}

verify_signature = function(req) {
	var crypto = require('crypto'),
	    hash = crypto.createHmac('sha1', KEY).update(JSON.stringify(req.body)).digest('hex'),
	    signature = "sha1=" + hash;
	return signature === req.headers['x-hub-signature'];
}

module.exports = {

	Pull: function (req, res) {
		if(sails.config.local.git.active && verify_signature(req)) {
			command("git checkout .");
			command("git pull");
			// command("pm2 reload app");
			command("forever restart 0");
			return res.send("SUCCESS");
		}
		else {
			res.status(401);
			return res.send('FAILURE: You are unauthorized to make that request.');
		}
  }

};
