.PHONY: serve-client
serve-client:
	@npx nx serve ownyourday-client

.PHONY: serve-api
serve-api:
	@npx nx serve ownyourday-api

.PHONY: serve-db
serve-db:
	@docker-compose -f docker-compose.local.yml up
