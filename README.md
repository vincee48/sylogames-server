# Sylo Games Server API

Work in progress

## Docker Containers

cd database
docker build --no-cache -t vincee48/sg-mysql .
docker run -d --name sg-mysql -p 48808:3306 --env-file ../.env vincee48/sg-mysql

cd server
docker build --no-cache -t vincee48/sg-node .
docker run -d --name sg-node -p 49160:8080 -env-file ../.env vincee48/sg-node

## Todo
- Device authentication API
- Facebook authentication API
- Matchmaking API
- Match turn API
- Store API
- Push notification API
- Automate deployment process
