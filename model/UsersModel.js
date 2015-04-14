var mongo = require('../db/mongo');

function UsersModel() 
{

}

UsersModel.prototype.create = function(data, callback) {
	mongo.collection('users').save(data, callback);
}

UsersModel.prototype.findOne = function(_id, callback) {
	mongo.collection('users').findOne({ _id: mongo.ObjectId(_id)}, callback);
}

UsersModel.prototype.findAll = function(callback) {
	mongo.collection('users').find({}, callback);
}

UsersModel.prototype.update = function(data, _id, callback) {
	mongo.collection('users').update({ _id: mongo.ObjectId(_id)}, data, callback);
}

UsersModel.prototype.delete = function(_id, callback) {
	mongo.collection('users').remove({ _id: mongo.ObjectId(_id)}, callback);
}

module.exports = new UsersModel();



