# Yelp and Prisma Schema Stitching

[![node](https://img.shields.io/badge/node-v9.10.0-blue.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-v6.3.0-green.svg)](https://www.npmjs.com/)
[![prisma](https://img.shields.io/badge/prisma-v1.13.7-red.svg)](https://www.prisma.io/)

This repository contains a GraphQL API that is composed of two GraphQL APIs (from Prisma & Yelp) using schema stitching (via GraphQL bindings).

## Usage

### 1. Clone the repo & install dependencies

```bash
git clone https://github.com/julisbf/yelp-schema-stitching.git
cd yelp-schema-stitching
npm install
```

### 2. Create your Prisma account

Go to ![prisma](http://prisma.io/)

### 3. Deploy the Prisma service

```bash
npm install -g prisma # install the Prisma CLI if necessary
prisma deploy
```

When prompted by the CLI where to deploy the service, select the **Demo server** and register with Prisma Cloud. If you have Docker installed, you can also deploy locally.

Once the command has finished, the Prisma CLI writes the `endpoint` property to ![`prisma.yml`](./prisma/prisma.yml).

### 4. Create .env file

```bash
touch .env
open .env
```

Add your Yelp Api Token \
`ACCESS_TOKEN = "__YOUR_YELP_API_TOKEN__"`

Add the endpoint from Prisma \
`PRISMA_ENDPOINT = "__YOUR_PRISMA_ENDPOINT__"`

Add jsonwebtoken Token \
`APP_SECRET = "__YOUR_OWN_SECRET_KEY__"`

`PORT = 8080`

> **Note:** You’ll need to create a client, join the beta program, and grab the API key from your ![client settings](https://www.yelp.com/developers/v3/manage_app)

### 5. Start your server

```bash
node index.js
```

### 6. Open a Playground

```bash
graphql playground
```

> **Note**: If you have the server running, you need to execute this command in a new terminal tab/window since the current tab is used by the server process.

### 7. Or install Playground Desktop App

Since the browser has been throwing a CORS error, you should consider to install ![GraphQL IDE desktop app](https://github.com/prismagraphql/graphql-playground/releases)

The playground lets you interact with all three GraphQL APIs that are defined in ![`.graphqlconfig.yml`](./.graphqlconfig.yml).

### ![Live Demo](https://resto-app-server.herokuapp.com/)