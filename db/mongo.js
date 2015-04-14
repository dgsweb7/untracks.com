
var mongojs = require('mongojs');


if (process.env.NODE_ENV == 'production') {
	var db = mongojs('admin:p1h_6jyuV_6U@localhost:27017/untrack');
} else {
	var db = mongojs('untrack');
}

console.log("process.env.NODE_ENV =>" + process.env.NODE_ENV)

module.exports = db;