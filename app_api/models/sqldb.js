var sql = require('msnodesqlv8'); //require('msnodesql');
var conn_str = "Driver={SQL Server Native Client 11.0};Server={agprolst01};Database={CLIMS};Trusted_Connection={Yes}";

//open database  
sql.open(conn_str, function(err, conn) {
	if (err) {
		console.log(err);
	}
});

function exeScript(sqlscript) {
	sql.queryRaw(conn_str, sqlscript, function(err, results) {

		if (err) {
			console.log(err);
		} else {
			console.log(results);
		}
	});
}

function select(sqlscript, cb) {
	sql.queryRaw(conn_str, sqlscript, function(err, results) {

		if (err) {
			console.log(err);
			cb({error:err});
		} else {
			var txt = toJson(results, 'data');
			var jsonObj = eval("(" + txt + ")");
			//console.log(jsonObj);
			cb(jsonObj);
		}
	});
}

function del(sqlscript) {
	exeScript(sqlscript);
}

function update(sqlscript) {
	exeScript(sqlscript);
}

function add(sqlscript) {
	exeScript(sqlscript);
}

//convert table to json  
function toJson(dt, tbName) {
	var jsonString;
	if (dt != undefined && dt.rows.length > 0) {
		var rowLen = dt.rows.length;
		var colLen = dt.meta.length;
		jsonString = "{";
		jsonString += "\"" + tbName + "\":[";
		for (var i = 0; i < rowLen; i++) {
			jsonString += "{";
			for (var j = 0; j < colLen; j++) {
				if (j < colLen - 1) {
					jsonString += "\"" + dt.meta[j].name + "\":" + "\"" + dt.rows[i][j] + "\",";
				} else if (j == colLen - 1) {
					jsonString += "\"" + dt.meta[j].name + "\":" + "\"" + dt.rows[i][j] + "\"";
				}
			}
			if (i == rowLen - 1) {
				jsonString += "}";
			} else {
				jsonString += "},";
			}
		}
		jsonString += "]}";
		return jsonString;
	}
	return jsonString;
}

exports.add = add;
exports.del = del;
exports.update = update;
exports.select = select;