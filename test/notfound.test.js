var notfound = require('../lib/notfound')
  , express = require('express')
  , request = require('supertest');

describe('notfound middleware', function() {

  describe('GET a non-existent path', function() {

    it('responds with a 404 JSON response', function(done) {
      var app = express();
      app.use(notfound());

      request(app)
        .get('/non-existent/path')
        .expect(404)
        .expect('Content-Type', /application\/json/)
        .expect(/"error":\s*"not-found"/, done)
    })

    it('responds with the given body', function(done) {
      var app = express();
      app.use(notfound({ body: 'Invisibru' }));

      request(app)
        .get('/non-existent/path')
        .expect(404)
        .expect('Invisibru', done)
    })

  })

})

