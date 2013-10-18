var koa = require('koa')
  , config = require('./lib/config');

var app = koa();

app.listen(config.get('port'), function() {
  console.log('API server listening on port ' + config.get('port'));
});
