# test-api

A simple express server for deploys testing purposes

## Usage

```sh
npm install -g @revolunet/test-api
test-api
```

Environnement variables :

 - `MESSAGE`: custom endpoint message
 - `PORT`: server port (default 3000)

## Docker

```sh
docker run -e MESSAGE="Yo !" -p 3002:3000 revolunet/test-api
``