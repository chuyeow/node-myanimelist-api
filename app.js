var koa = require('koa')
  , koaLogger = require('koa-logger')
  , config = require('./lib/config')
  , get = require('./lib/router').get
  , post = require('./lib/router').post;

var app = koa();
app.use(koaLogger());

app.use(get('/', function *() {
  this.body = 'OHAI';
}));

app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});
