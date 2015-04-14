var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../db/mongo'),
    item;


	//Clear all collection
	describe('Users Endpoints', function(){
  		beforeEach(function(done) {
  			db.collection('products').remove({}, function(err) { })
			db.collection('products').insert({ 'name': 'Breaking Bad' }, function(err) { })
			db.collection('products').insert({ 'name': '24 Hours' }, function(err) { })
			db.collection('products').insert({ 'name': 'Empty' }, function(err) { })
			db.collection('products').insert({ 'name': 'House of Cards' }, done);
 	});


	it('GET /products', function(done) {
        	request(app)
          	.get('/products')
          	.expect(200)
          	.end(function(err, res){
            	var data = res.body;
            	assert.equal(data[0].name, 'Breaking Bad');
            	assert.equal(data.length, 4);
            	done();
    	    });
	});


	it('GET /products/:id', function(done) {
			db.collection('products').find({name:'Breaking Bad'} , function(err, item) {
	        	request(app)
	          	.get('/products/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	assert.equal(data.name, 'Breaking Bad');
	            	done();
		    	});
			})
	});



  	it('POST /products', function(done){
    	request(app)
      	.post('/products')
      	.send({ 'name': 'Justified' })
      	.expect(200)
      	.end(function(err, res){
        	var data = res.body;
        	assert.equal(JSON.parse(JSON.stringify(data))[0].name, 'Justified');
        	done();
      	});
  	});


	it('PUT /products/:id', function(done){

			db.collection('products').find({name:'Empty'} , function(err, item) {
	        	request(app)
	          	.put('/products/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.send({ 'name': 'Prision Break' })
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	done();
		    	});
			})
  	});


	it('DELETE /products/:id', function(done){

			db.collection('products').find({name:'Empty'} , function(err, item) {
	        	request(app)
	          	.delete('/products/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	done();
		    	});
			})
  	});

});

