# Express REST API boilerplate with TypeScript

Simple and lightweight boilerplate for creating REST API.
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

## Before start, you need
- Node 12.16+
- Docker

## Let's started
**Step 1:** Fork the repository or download it into your local machine

**Step 2:** Open the project in your IDE

**Step 3:** Run docker-compose
```sh
docker-compose up
```
It starts the latest Postgres database and pgAdmin 4 client (http://localhost:5050).

*PS. You will find database IP with following command:*

```
docker inspect node_rest_api | grep IPAddress
```

**Step 4:** Install dependencies

```
npm install
```

**Step 5:** Start the server on http://localhost:3031
```
npm run dev
```

**You are good to go!**

## Default development environment credentials

**Postgres database**

USER: postgres

PASSWORD: postgres

DATABASE NAME: restapi

**pgAdmin client**

EMAIL: noderestapi@noderestapi.ee

PASSWORD: postgres


## Basic API Routes

The route prefix is **/api/v1** by default, and it is defined in environment variables. 

| Route | Method | Body | Description |
| ------ | ------ | ------ | ------ |
| **/login** | POST |email, password  | Authenticate user and get access token |
| **/register** | POST | email, password  | Save new user into database |
| **/entry** | GET | - | An example entity endpoint for user entries |
| **/entry** | POST | name  | An example entity endpoint for adding user's new entry | 

## Project structure

```
├── dist
├── src
│   ├── config
│   │   ├── db.ts
│   │   ├── index.ts
│   │   └── logger.ts
│   ├── middleware
│   │   ├── common.ts
│   │   ├── errorHandlers.ts
│   │   ├── index.ts
│   │   └── passport.ts
│   ├── server.ts
│   ├── services
│   │   ├── auth
│   │   │   ├── AuthController.ts
│   │   │   ├── UserModel.ts
│   │   │   └── routes.ts
│   │   ├── entry
│   │   │   ├── EntryController.ts
│   │   │   ├── EntryModel.ts
│   │   │   └── routes.ts
│   │   └── index.ts
│   └── utils
│       ├── ErrorHandler.ts
│       ├── httpErrors.ts
│       └── index.ts
│── tsconfig.json
├── docker-compose.yml
├── package-lock.json
├── package.json
├── LICENSE
├── README.md
```

| Name | Description |
| ------ | ------ |
| **/dist** | Compiled typescript files |
| **/src** | Source files |
| **/src/config** | Everything for configure the api (database, logger...) |
| **/src/middleware** | Middlewares for api. Common includes cors, helmet and  compression middlewares. |
| **/src/services** | All services the api needs. Add all needed logic of the api here. Default service is authentication service. An example service is entry service. |
| **/src/utils** | All helper and util methods and classes. Default utils are everything about error handling |
| **/src/server.ts** | The api process journey starts from here. |
