var express = require('express');
var router = express.Router();


router.get('/products', function (req, res) {
  res.json([
  		{ "name": "Wine", "price" : 100.00 },
  		{ "name": "Meat" },
  		{ "name": "DVD" },
  		{ "name": "Phone" }
  ]);
});


router.get('/products/:_id', function (req, res) {
	var _id = parseInt(req.params._id, 10);

  res.json([
  		{ "name": "Wine", "price" : 100.00, "id" : _id }
  ]);
});


router.post('/products', function (req, res) {
	res.status(201).json({ "status" : "Created"});
});


router.put('/products/:_id', function (req, res) {
	var _id = parseInt(req.params._id, 10);

	res.status(200).json({ "status" : "Updated" });
});


router.delete('/products/:_id', function (req, res) {
	var _id = parseInt(req.params._id, 10);

	res.status(200).json({ "status" : "Deleted" });
});

module.exports = router;