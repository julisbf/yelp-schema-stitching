require('dotenv').config()
const fetch = require('node-fetch')
const {
  Binding
} = require('graphql-binding')
const {
  HttpLink
} = require('apollo-link-http')
const {
  makeRemoteExecutableSchema
} = require('graphql-tools')
const yelpTypes = require('./generated/yelp.js')

const DELIVERY_API_BASE_URL = 'https://api.yelp.com/v3/graphql'
const YELP_API_KEY = process.env.ACCESS_TOKEN

class YelpBinding extends Binding {
  constructor() {
    const endpoint = DELIVERY_API_BASE_URL
    const link = new HttpLink({
      fetch,
      uri: endpoint,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      }
    })

    const schema = makeRemoteExecutableSchema({
      link,
      schema: yelpTypes
    })
    super({
      schema
    })
  }
}

module.exports = YelpBinding