const rp = require('request-promise')
require('dotenv').config();

const YELP_API_KEY = process.env.ACCESS_TOKEN


function query(location, term, limit) {
  //console.log('Yelp.js', query)
  let QUERY = `
    {
      search(term: "${term}",
        location: "${location}",
        limit: ${limit}) {
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

  const options = {
    method: 'POST',
    uri: 'https://api.yelp.com/v3/graphql',
    body: QUERY,
    json: false,
    headers: {
      'Content-Type': 'application/graphql',
      'Authorization': `Bearer ${YELP_API_KEY}`
    }
  };
  return rp(options).then(html => JSON.parse(html));
}

module.exports = {
  query
}