var koa = require('koa')
  , koaLogger = require('koa-logger')
  , mount = require('koa-mount')
  , Router = require('koa-router')
  , config = require('./lib/config');

var app = koa();
app.use(koaLogger());

var apiVersion2 = new Router();

apiVersion2.get('/anime/:id', function *(id) {
  var anime = yield function *() { return id };
  this.body = anime;
});

app.use(mount('/v2', apiVersion2.middleware()));

app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});
