module.exports = notfound;

function notfound(options) {
  var options = options || {};
  var body = options.body || { 'error': 'not-found' };

  return function(next) {
    return function *notfound() {
      yield next;
      if (this.body) return;
      this.status = 404;
      this.body = body;
    };
  };
};
