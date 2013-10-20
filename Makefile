MOCHA_OPTS =
REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--recursive \
		$(MOCHA_OPTS)

test-watch:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--recursive \
		--watch \
		$(MOCHA_OPTS)

.PHONY: test test-watch
