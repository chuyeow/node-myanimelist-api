var notfound = require('../lib/notfound')
  , koa = require('koa')
  , request = require('supertest');

describe('notfound middleware', function() {

  describe('GET a non-existent path', function() {

    it('responds with a 404 JSON response', function(done) {
      var app = koa();
      app.use(notfound());
      var server = app.listen();

      request(server)
        .get('/non-existent/path')
        .expect('Content-Type', 'application/json')
        .expect(404)
        .expect(/"error": "not-found"/, done)
    })

    it('responds with the given body', function(done) {
      var app = koa();
      app.use(notfound({ body: 'Invisibru' }));
      var server = app.listen();

      request(server)
        .get('/non-existent/path')
        .expect(404)
        .expect(/Invisibru/, done)
    })

  })

})

