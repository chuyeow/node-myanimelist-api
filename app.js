var koa = require('koa')
  , mount = require('koa-mount')
  , Router = require('koa-router')
  , config = require('./config');

var app = koa();
if ('development' == app.env) app.use(require('koa-logger'));

var apiVersion2 = new Router();

apiVersion2.get('/anime/:id', function *(id) {
  this.set('Content-Type', 'application/json');
  var anime = yield function *() { return id };
  this.body = anime;
});

app.use(mount('/v2', apiVersion2.middleware()));

var server = app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});

module.exports = {
  app: app,
  server: server
}
