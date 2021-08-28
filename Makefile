build:
	docker build . -t wapp

run:
	docker run -p 3001:3001 -d wapp

log:
	docker logs `docker ps | grep 'wapp' | awk '{print $$1}'`

shell:
	docker exec -ti `docker ps | grep 'wapp' | awk '{print $$1}'` /bin/bash