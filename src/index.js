const YelpBinding = require('./YelpBindings')
const ylpBinding = new YelpBinding()
const {
  Prisma
} = require('prisma-binding')
const {
  GraphQLServer
} = require('graphql-yoga')

const resolvers = {
  Query: {
    /* user: (parent, args, context, info) =>
      context.db.query.user({
        where: {
          id: args.id
        }
      }, info), */
    search: async (parent, args, context, info) => {
      return context.ylp.query.search({
        term: args.term,
        location: args.location,
        limit: args.limit
      })
    }
  }
}

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