
TESTS = test/*.js
REPORTER = list


test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 300 \
		$(TESTS)


.PHONY: test