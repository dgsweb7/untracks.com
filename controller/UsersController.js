var UsersModel = new require('../model/UsersModel');
var Promise = require('bluebird');

function UsersController(Model) {
	this.Model = Promise.promisifyAll(Model);
}


UsersController.prototype.create = function(req, res) {

	var data = req.body;

	this.Model.createAsync(data)
		.then(function (result) { 
			res.json(result);
		})
		.catch(function (err) {
			console.log(err);
		});
}


UsersController.prototype.findOne = function(req, res) {

	var _id = req.params._id;
	
	this.Model.findOneAsync(_id)
		.then(function (result) { 
			res.json(result);
		})
		.catch(function (err) {
			console.log(err);
		});
}


UsersController.prototype.findAll = function(req, res) {
	
	this.Model.findAllAsync()
		.then(function (result) { 
			res.json(result);
		})
		.catch(function (err) {
			console.log(err);
		});
}


UsersController.prototype.delete = function(req, res) {
	
	var _id = req.params._id;
	
	this.Model.deleteAsync(_id)
		.then(function (result) { 
			res.json(result);
		})
		.catch(function (err) {
			console.log(err);
		});
}

UsersController.prototype.update = function(req, res) {
	
	var data = req.body, _id = req.params._id;
	
	this.Model.updateAsync(data, _id)
		.then(function (result) { 
			res.json(result);
		})
		.catch(function (err) {
			console.log(err);
		});
}


module.exports = new UsersController(UsersModel);

