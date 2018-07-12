const YelpBinding = require('./YelpBinding')
const {
  Prisma
} = require('prisma-binding')
const {
  GraphQLServer
} = require('graphql-yoga')
const {
  getUserId
} = require('./utils')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
    }),
    ylp: new YelpBinding(),
  }),
})

const options = {
  port: process.env.PORT || 8080
}

server.start(options, ({
  port
}) => console.log(`Server is running on http://localhost:${port}`))