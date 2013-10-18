exports.get = function(path, fn) {
  return route('GET', path, fn);
}

exports.post = function(path, fn) {
  return route('POST', path, fn);
}

function route(method, path, fn) {
  return function(next) {
    return function *() {
      var match = method == this.method && this.path == path;
      if (match) return yield fn;
      yield next;
    }
  }
}
