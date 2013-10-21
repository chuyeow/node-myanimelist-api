var app = require('../app')
  , Anime = require('../lib/anime')
  , sinon = require('sinon')
  , request = require('supertest');

describe('GET /anime/:id', function() {

  var animeStub;

  beforeEach(function(done) {
    animeStub = sinon.stub(Anime, 'byId').yields(null, null);
    done();
  });
  afterEach(function(done) {
    animeStub.restore();
    done();
  });

  it('responds with JSON', function(done) {

    request(app)
      .get('/v2/anime/1887')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  })

  it('responds with a 404 if :id is not an integer', function(done) {
    request(app)
      .get('/v2/anime/yotsuba')
      .expect(404)
      .expect('Content-Type', /application\/json/)
      .expect(/"error":\s*"not-found"/)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  })

  it('queries Anime for the anime with the given ID', function(done) {
    request(app)
      .get('/v2/anime/1887')
      .end(function(err, res) {
        if (err) return done(err);

        sinon.assert.calledOnce(animeStub);
        sinon.assert.calledWith(animeStub, '1887');

        done();
      });
  })

})
