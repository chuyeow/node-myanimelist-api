var app = require('../app').app
  , server = require('../app').server
  , request = require('supertest');

describe('GET /anime/:id', function() {

  it('responds with JSON', function(done) {
    request(server)
      .get('/v2/anime/1887')
      .expect('Content-Type', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  })

  it('responds with a 404 if :id is not an integer', function(done) {
    request(server)
      .get('/v2/anime/yotsuba')
      .expect('Content-Type', 'application/json')
      .expect(404)
      .expect(/"error": "not-found"/)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  })

})
