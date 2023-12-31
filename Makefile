build:
	yarn
	yarn build
	docker compose up -d --build 

.PHONY: build

deploy:
	git pull
	yarn
	yarn build
	docker-compose up -d --build 

.PHONY: deploy

up:
	docker compose up -d 

.PHONY: up

down: 
	docker compose down

.PHONY: down

logs:
	docker logs backend-01 -f

.PHONY: logs
