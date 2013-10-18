var nconf = require('nconf');
nconf.argv().env().file({ file: 'config.json', dir: '../' });
exports = module.exports = nconf;
