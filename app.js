var express = require('express')
  , config = require('./config')
  , Anime = require('./lib/anime')
  , notfound = require('./lib/notfound');

if ('development' == app.env) app.use(require('koa-logger'));
var app = express();

app.get('/v2/anime/:id', function(req, res, next) {
  res.type('application/json');

  var id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.send(404, { 'error': 'not-found' });
  }

  Anime.by_id(id, function(err, anime) {
    res.send(anime);
  });
});

app.use(notfound());

app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});

module.exports = app;
