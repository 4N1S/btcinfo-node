
const _ = require('underscore'),
	  https = require('https'),
	  crypto = require('crypto'),
	  url = require('url'),
	  urlencode = require('urlencode'),
 	  querystring = require('querystring');


const btcinfo = function(network,verbose) {
	this.verbose 		= verbose || false;
	this.version 		= "0.0.1";
	this.network		= (network=="testnet") ? "testnet." : ""
	this.host 			= this.network+"blockexplorer.com";
	this.uri 			= "/api/";
	this.baseURL 		= "https://blockexplorer.com";
	this.userAgent 		= "btcinfo-node";
	this.headers		= {
								'User-Agent': this.userAgent
							}
};

btcinfo.prototype.getBalance = function(addr,callback) {
	this.pubRequest("addr/"+addr+"/balance", {}, function(err, data) {
		data={"balance":data};
		return callback(err, data);
	});
}	
btcinfo.prototype.getUtxo = function(addr,callback) {
	this.pubRequest("addr/" + addr + "/utxo?noCache=1", {}, function(err, data) {
		return callback(err, data);
	});
}	

btcinfo.prototype.pushtx = function(transaction,callback) {
	const data=querystring.stringify({rawtx: transaction});
	this.pubRequestPOST("tx/send", data, function(err, data) {
		return callback(err, data);
	});
}

btcinfo.prototype.getFee = function(callback) {
	this.pubRequest("v1/fees/recommended", {}, function(err, data) {
		return callback(err, data);
	});
}

btcinfo.prototype.streamBalance = function(addr,callback) {
	const duration=30000;
    console.log("S! Stream Initialization - Getbalance "+addr);
    this.pubRequest("addr/"+addr+"/balance", {}, function(err, data) {
    	data={"balance":data};
    	return callback(err, data);
    });
	setInterval(()=>{
		this.pubRequest("addr/"+addr+"/balance", {}, function(err, data) {
			data={"balance":data};
			return callback(err, data);
		});
	
	}, duration);

}
btcinfo.prototype.streamUtxo = function(addr,callback) {
	const duration=30000;
    console.log("S! Stream Initialization - GetUtxo "+addr);
	this.pubRequest("addr/" + addr + "/utxo?noCache=1", {}, function(err, data) {
		return callback(err, data);
	});
	setInterval(()=>{
		this.pubRequest("addr/" + addr + "/utxo?noCache=1", {}, function(err, data) {
			return callback(err, data);
		});
	
	}, duration);

}

btcinfo.prototype.pubRequest = function(method, params, callback) {
	let options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'GET',
	  verbose: this.verbose,
	  headers:this.headers
	};
	if(method=="v1/fees/recommended"){
		options.hostname="bitcoinfees.earn.com";

	}
	cb = function(res) {
		if (res.statusCode < 200 || res.statusCode > 299) {
		   callback(res.statusCode);
		 }
		if(res.statusCode==200){

		let str = '';
		res.on('data',(chunk) => {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		res.on('end',() => {
			let objFromJSON;

				try {
					objFromJSON = JSON.parse(str);
					return callback(null, objFromJSON);
				}
				catch (err) {
					return callback(err, null);
				}
		});
		}
	}
	const req = https.request(options, cb);
	req.on('error', (err) =>{
		callback(err.status, null);
	});

	req.end();

};




btcinfo.prototype.pubRequestPOST = function(method, params, callback) {
	let options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'POST',
	  verbose: this.verbose,
	  headers:{
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(params)
	  }
	};

	cb = function(response) {
		// console.log(response);
		if (response.statusCode < 200 || response.statusCode > 299) {
		   callback(response.statusCode);
		 }
		if(response.statusCode==200){

		let str = '';
		response.on('data', function (chunk) {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		response.on('end', function () {
			let objFromJSON;

				try {
					objFromJSON = JSON.parse(str);
					return callback(null, objFromJSON);
				}
				catch (err) {
					return callback(err, null);
				}
		});
		}
	}
	const req = https.request(options, cb);
	req.write(params);

	req.on('error', function(err) {
		callback(err.status, null);
	});

	req.end();

};

module.exports = btcinfo;
