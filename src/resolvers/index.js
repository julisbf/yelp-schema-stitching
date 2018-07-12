const {
  Query
} = require('./Query')
const {
  auth
} = require('./Mutation/auth')
const {
  place
} = require('./Mutation/place')
const {
  AuthPayload
} = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...place,
  },
  AuthPayload,
}