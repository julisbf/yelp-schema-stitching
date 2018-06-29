# yelp-schema-stitching

This repository contains a GraphQL API that is composed of two GraphQL APIs (from Prisma & Yelp) using schema stitching (via GraphQL bindings).

## Usage

### 1. Clone the repo & install dependencies

```bash
git clone git@github.com:nikolasburk/prisma-contentful-schema-stitching.git
cd prisma-contentful-schema-stitching
yarn install
```

### 2. Create your Prisma account

Go to [prisma](http://prisma.io/)

### 3. Deploy the Prisma service

```bash
npm install -g prisma # install the Prisma CLI if necessary
prisma deploy
```

When prompted by the CLI where to deploy the service, select the **Demo server** and register with Prisma Cloud. If you have Docker installed, you can also deploy locally.

Once the command has finished, the Prisma CLI writes the `endpoint` property to [`prisma.yml`](./prisma/prisma.yml).

### 4. Create .env file

```bash
touch .env
open .env
```

Add your Yelp Api Token \
`ACCESS_TOKEN = "__YOUR_YELP_API_TOKEN__"`

Add the endpoint from Prisma \
`PRISMA_ENDPOINT = "__YOUR_PRISMA_ENDPOINT__"`

`PORT = 8080`

> **Note:** You’ll need to create a client, join the beta program, and grab the API key from your [client settings](https://www.yelp.com/developers/v3/manage_app)

### 5. Start your server

```bash
node index.js
```

### 6. Open a Playground

```bash
graphql playground
```

> **Note**: If you have the server running, you need to execute this command in a new terminal tab/window since the current tab is used by the server process.

The playground lets you interact with all three GraphQL APIs that are defined in [`.graphqlconfig.yml`](./.graphqlconfig.yml).
