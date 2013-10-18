# MyAnimeList Unofficial API

An unofficial API for the awesome http://myanimelist.net/.

## Setting up for development

1. You'll need at least node 0.11.4 or higher for generator support.
1. Install node.js dependencies: `npm install`
1. You'll probably want to use something like [nodemon](https://github.com/remy/nodemon) or [node-supervisor](https://github.com/isaacs/node-supervisor) to watch for changed files and restart the node server, e.g. `nodemon --exec node --harmony-generators app.js --ext js,json`
