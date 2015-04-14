var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../db/mongo'),
    item, _id;


	//Clear all collection
	describe('Users Endpoints', function(){
  		beforeEach(function(done) {
  			db.collection('users').remove({}, function(err) { })
			db.collection('users').insert({ 'name': 'Patrick Ewing' }, function(err) { })
			db.collection('users').insert({ 'name': 'Michael Jordan' }, done);
 	});


	it('GET /users', function(done) {
        	request(app)
          	.get('/users')
          	.expect(200)
          	.end(function(err, res){
            	var data = res.body;
            	assert.equal(data[0].name, 'Patrick Ewing');
            	assert.equal(data.length, 2);
            	done();
    	    });
	});


	it('GET /users/:id', function(done) {
			db.collection('users').find({name:'Patrick Ewing'} , function(err, item) {
	        	request(app)
	          	.get('/users/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	assert.equal(data.name, 'Patrick Ewing');
	            	done();
		    	});
			})
	});



  	it('POST /users', function(done){
    	request(app)
      	.post('/users')
      	.send({ 'name': 'Charles Barkley' })
      	.expect(200)
      	.end(function(err, res){
        	var data = res.body;
        	assert.equal(JSON.parse(JSON.stringify(data))[0].name, 'Charles Barkley');
        	done();
      	});
  	});


	it('PUT /users/:id', function(done){

			db.collection('users').find({name:'Patrick Ewing'} , function(err, item) {
	        	request(app)
	          	.put('/users/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.send({ 'name': 'Patrick Ewing Updated' })
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	done();
		    	});
			})
  	});


	it('DELETE /users/:id', function(done){

			db.collection('users').find({name:'Patrick Ewing'} , function(err, item) {
	        	request(app)
	          	.delete('/users/' + JSON.parse(JSON.stringify(item))[0]._id)
	          	.expect(200)
	          	.end(function(err, res){
	            	var data = res.body;
	            	assert.equal(item.length, 1);
	            	done();
		    	});
			})
  	});

});

