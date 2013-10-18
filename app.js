var koa = require('koa')
  , koaLogger = require('koa-logger')
  , config = require('./lib/config')
  , router = require('koa-router');

var app = koa();
app.use(koaLogger());
app.use(router(app));

app.get('/', function *() {
  this.body = 'OHAI';
});

app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});
