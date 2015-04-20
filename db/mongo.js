
var mongojs = require('mongojs');

//if (process.env.NODE_ENV == 'production') {
	//var db = mongojs('mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/');
//} else {
//	var db = mongojs('untrack');
//}

var db = mongojs('untrack');

module.exports = db;