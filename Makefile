.PHONY: serve-client
serve-client:
	@npx nx serve ownyourday-client

.PHONY: serve-api
serve-api:
	@npx nx serve ownyourday-api

.PHONY: serve-db
serve-db:
	@docker-compose -f docker-compose.local.yml up

.PHONY: format
format:
	@npx nx format && terraform fmt -recursive

.PHONY: format-check
format-check:
	@npx nx format:check

.PHONY: test-client
test-client:
	@npx nx run ownyourday-client:test
