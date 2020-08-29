# Express REST API boilerplate with TypeScript

Simple and lightweight boilerplate for REST API. See below how to it set up
fast. 

## Features
- TypeScript
- [Express](https://expressjs.com/)
- [PostgreSQL](https://github.com/brianc/node-postgres) - database (node-postgres)
- [TypeORM](https://typeorm.io/#/) - database querying
- [Winston](https://github.com/winstonjs/winston) - logging
- [Class-validator](https://github.com/typestack/class-validator) - data validation
- [Passport](https://github.com/jaredhanson/passport) and [passport-jwt](https://github.com/mikenicholson/passport-jwt) - authentication and authorization
- [Compression](https://github.com/expressjs/compression) - gzip compression
- [Helmet](https://github.com/helmetjs/helmet) - HTTP headers for security
- [Dotenv](https://github.com/rolodato/dotenv-safe) - load environment variables from .env file
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - password encoding and decoding

## Requirements
- Node 12.16+
- Docker

## Getting started
**Step 1:** Fork the repository or download it into your local machine

**Step 2:** Open project in your IDE

**Step 3:** Run docker-compose
```sh
docker-compose up
```
It starts the latest Postgres database and pgAdmin 4 client.

**Step 4:** Install dependencies

```
npm install
```

Step 5: Start the server on http://localhost:3031
```
npm run dev
```

## Development environment credentials

**Postgres database**

USER: postgres

PASSWORD: postgres

DATABASE NAME: restapi

*PS. You will find database IP with following command:*
```
docker inspect node_rest_api | grep IPAddress
```

**pgAdmin client (http://localhost:5050)**

EMAIL: noderestapi@noderestapi.ee

PASSWORD: postgres


## Basic API Routes

The route prefix is **/api/v1** by default, and it is defined in environment variables. 

| Route | Body | Description |
| ------ | ------ | ------ |
| **POST /login** | email, password  | Authenticate user and get access token |
| **POST /register** | email, password  | Save new user into database |
| **GET /entry** | - | An example entity endpoint for user entries |
| **POST /entry** | name  | An example entity endpoint for adding user's new entry | 
