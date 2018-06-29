const typeDefs = `
type Business {
  id: ID! 
  name: String!
  price:String
  photos:[String]
  coordinates: Coordinates
  location: Location
  categories: [Category]
}

type Businesses {
  total: Int
  business: [Business]!
}

type Coordinates {
  latitude: Float
  longitude: Float
}

type Location {
  address1: String
  city: String
  state: String
  country: String
}

type Category {
  title: String
}

type Query {
  search(term: String!, location: String!, limit: Int): Businesses
  business(id: String!): Business
}
`

module.exports = typeDefs