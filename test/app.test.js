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

})