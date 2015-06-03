var WeMo = require("./lib/wemo");

exports.action = function(data, callback, config, SARAH) {
	console.log("Wemo command on " + data.ip + " ---- " + data.code);
	var wemoSwitch = new WeMo(data.ip, 49153);
	wemoSwitch.setBinaryState(data.code, function(err, result) {
		if (err) console.error(err);
		console.log(result);
		wemoSwitch.getBinaryState(function(err, result) {
			if (err) console.error(err);
			console.log(result); 
		});
	});
	
	var tts = ''; 
  	callback({ 'tts': tts });
}