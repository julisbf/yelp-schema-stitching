const {
  Query
} = require('./Query')
const {
  QueryYelp
} = require('./QueryYelp')
const {
  auth
} = require('./Mutation/auth')
const {
  business
} = require('./Mutation/business')
const {
  AuthPayload
} = require('./AuthPayload')

module.exports = {
  Query: {
    ...Query,
    ...QueryYelp,
  },
  Mutation: {
    ...auth,
    ...business,
  },
  AuthPayload,
}