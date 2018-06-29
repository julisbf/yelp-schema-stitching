require('dotenv').config();
const fetch = require('node-fetch')
const {
  Binding
} = require('graphql-binding')
const {
  HttpLink
} = require('apollo-link-http')
const {
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas
} = require('graphql-tools')
const typeDefs = require('./generated/yelp.js')


const DELIVERY_API_BASE_URL = 'https://api.yelp.com/v3/graphql'
const YELP_API_KEY = process.env.ACCESS_TOKEN

const QUERY = `
    {
      search(term: "pizza",
        location: "new york",
        limit: 5) {
          business{
            ...bizInfo
          }
        }
    }

    fragment bizInfo on Business {
      id
      name
      price
      photos
      coordinates {
        latitude
        longitude
      }
      location {
        address1
        city
        state
        country
      }
      categories {
        title
      }
    }
  `


class YelpBinding extends Binding {
  constructor() {
    const endpoint = DELIVERY_API_BASE_URL
    const link = new HttpLink({
      fetch,
      fetchOptions: {
        method: 'POST'
      },
      uri: endpoint,
      useGETForQueries: true,
      headers: {
        'Content-Type': 'application/graphql',
        'Authorization': `Bearer ${YELP_API_KEY}`
      },
    })

    const schema = makeRemoteExecutableSchema({
      link,
      schema: typeDefs
    })

    super({
      schema,
    })
  }

  /*async search(term, location, limit) {

  } */
}

module.exports = YelpBinding