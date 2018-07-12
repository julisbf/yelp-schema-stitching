const { Prisma } = require('prisma-binding')
const { GraphQLResolveInfo } = require('graphql')

const typeDefs = `
type AggregateBusiness {
  count: Int!
}

type AggregateBusinesses {
  count: Int!
}

type AggregateCategories {
  count: Int!
}

type AggregateCoordinates {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateLoving {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWatching {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Business implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  yelpId: String!
  price: String
  location(where: LocationWhereInput): Location
  coordinates(where: CoordinatesWhereInput): Coordinates
  categories(where: CategoriesWhereInput, orderBy: CategoriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Categories!]
  photos: String
  watchers(where: WatchingWhereInput, orderBy: WatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Watching!]
  lovers(where: LovingWhereInput, orderBy: LovingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Loving!]
  isLoved: Boolean!
  isWatched: Boolean!
}

"""
A connection to a list of items.
"""
type BusinessConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [BusinessEdge]!
  aggregate: AggregateBusiness!
}

input BusinessCreateInput {
  name: String!
  yelpId: String!
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationCreateOneInput
  coordinates: CoordinatesCreateOneInput
  categories: CategoriesCreateManyInput
  watchers: WatchingCreateManyWithoutBusinessInput
  lovers: LovingCreateManyWithoutBusinessInput
}

input BusinessCreateManyInput {
  create: [BusinessCreateInput!]
  connect: [BusinessWhereUniqueInput!]
}

input BusinessCreateOneWithoutLoversInput {
  create: BusinessCreateWithoutLoversInput
  connect: BusinessWhereUniqueInput
}

input BusinessCreateOneWithoutWatchersInput {
  create: BusinessCreateWithoutWatchersInput
  connect: BusinessWhereUniqueInput
}

input BusinessCreateWithoutLoversInput {
  name: String!
  yelpId: String!
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationCreateOneInput
  coordinates: CoordinatesCreateOneInput
  categories: CategoriesCreateManyInput
  watchers: WatchingCreateManyWithoutBusinessInput
}

input BusinessCreateWithoutWatchersInput {
  name: String!
  yelpId: String!
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationCreateOneInput
  coordinates: CoordinatesCreateOneInput
  categories: CategoriesCreateManyInput
  lovers: LovingCreateManyWithoutBusinessInput
}

"""
An edge in a connection.
"""
type BusinessEdge {
  """
  The item at the end of the edge.
  """
  node: Business!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

type Businesses {
  business(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business!]
  total: Int
}

"""
A connection to a list of items.
"""
type BusinessesConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [BusinessesEdge]!
  aggregate: AggregateBusinesses!
}

input BusinessesCreateInput {
  total: Int
  business: BusinessCreateManyInput
}

"""
An edge in a connection.
"""
type BusinessesEdge {
  """
  The item at the end of the edge.
  """
  node: Businesses!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum BusinessesOrderByInput {
  total_ASC
  total_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BusinessesPreviousValues {
  total: Int
}

type BusinessesSubscriptionPayload {
  mutation: MutationType!
  node: Businesses
  updatedFields: [String!]
  previousValues: BusinessesPreviousValues
}

input BusinessesSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BusinessesSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BusinessesSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BusinessesSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BusinessesWhereInput
}

input BusinessesUpdateInput {
  total: Int
  business: BusinessUpdateManyInput
}

input BusinessesWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BusinessesWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BusinessesWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BusinessesWhereInput!]
  total: Int
  """
  All values that are not equal to given value.
  """
  total_not: Int
  """
  All values that are contained in given list.
  """
  total_in: [Int!]
  """
  All values that are not contained in given list.
  """
  total_not_in: [Int!]
  """
  All values less than the given value.
  """
  total_lt: Int
  """
  All values less than or equal the given value.
  """
  total_lte: Int
  """
  All values greater than the given value.
  """
  total_gt: Int
  """
  All values greater than or equal the given value.
  """
  total_gte: Int
  business_every: BusinessWhereInput
  business_some: BusinessWhereInput
  business_none: BusinessWhereInput
}

enum BusinessOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  yelpId_ASC
  yelpId_DESC
  price_ASC
  price_DESC
  photos_ASC
  photos_DESC
  isLoved_ASC
  isLoved_DESC
  isWatched_ASC
  isWatched_DESC
}

type BusinessPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  yelpId: String!
  price: String
  photos: String
  isLoved: Boolean!
  isWatched: Boolean!
}

type BusinessSubscriptionPayload {
  mutation: MutationType!
  node: Business
  updatedFields: [String!]
  previousValues: BusinessPreviousValues
}

input BusinessSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BusinessSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BusinessSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BusinessSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BusinessWhereInput
}

input BusinessUpdateDataInput {
  name: String
  yelpId: String
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationUpdateOneInput
  coordinates: CoordinatesUpdateOneInput
  categories: CategoriesUpdateManyInput
  watchers: WatchingUpdateManyWithoutBusinessInput
  lovers: LovingUpdateManyWithoutBusinessInput
}

input BusinessUpdateInput {
  name: String
  yelpId: String
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationUpdateOneInput
  coordinates: CoordinatesUpdateOneInput
  categories: CategoriesUpdateManyInput
  watchers: WatchingUpdateManyWithoutBusinessInput
  lovers: LovingUpdateManyWithoutBusinessInput
}

input BusinessUpdateManyInput {
  create: [BusinessCreateInput!]
  connect: [BusinessWhereUniqueInput!]
  disconnect: [BusinessWhereUniqueInput!]
  delete: [BusinessWhereUniqueInput!]
  update: [BusinessUpdateWithWhereUniqueNestedInput!]
  upsert: [BusinessUpsertWithWhereUniqueNestedInput!]
}

input BusinessUpdateOneWithoutLoversInput {
  create: BusinessCreateWithoutLoversInput
  connect: BusinessWhereUniqueInput
  delete: Boolean
  update: BusinessUpdateWithoutLoversDataInput
  upsert: BusinessUpsertWithoutLoversInput
}

input BusinessUpdateOneWithoutWatchersInput {
  create: BusinessCreateWithoutWatchersInput
  connect: BusinessWhereUniqueInput
  delete: Boolean
  update: BusinessUpdateWithoutWatchersDataInput
  upsert: BusinessUpsertWithoutWatchersInput
}

input BusinessUpdateWithoutLoversDataInput {
  name: String
  yelpId: String
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationUpdateOneInput
  coordinates: CoordinatesUpdateOneInput
  categories: CategoriesUpdateManyInput
  watchers: WatchingUpdateManyWithoutBusinessInput
}

input BusinessUpdateWithoutWatchersDataInput {
  name: String
  yelpId: String
  price: String
  photos: String
  isLoved: Boolean
  isWatched: Boolean
  location: LocationUpdateOneInput
  coordinates: CoordinatesUpdateOneInput
  categories: CategoriesUpdateManyInput
  lovers: LovingUpdateManyWithoutBusinessInput
}

input BusinessUpdateWithWhereUniqueNestedInput {
  where: BusinessWhereUniqueInput!
  data: BusinessUpdateDataInput!
}

input BusinessUpsertWithoutLoversInput {
  update: BusinessUpdateWithoutLoversDataInput!
  create: BusinessCreateWithoutLoversInput!
}

input BusinessUpsertWithoutWatchersInput {
  update: BusinessUpdateWithoutWatchersDataInput!
  create: BusinessCreateWithoutWatchersInput!
}

input BusinessUpsertWithWhereUniqueNestedInput {
  where: BusinessWhereUniqueInput!
  update: BusinessUpdateDataInput!
  create: BusinessCreateInput!
}

input BusinessWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BusinessWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BusinessWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BusinessWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  yelpId: String
  """
  All values that are not equal to given value.
  """
  yelpId_not: String
  """
  All values that are contained in given list.
  """
  yelpId_in: [String!]
  """
  All values that are not contained in given list.
  """
  yelpId_not_in: [String!]
  """
  All values less than the given value.
  """
  yelpId_lt: String
  """
  All values less than or equal the given value.
  """
  yelpId_lte: String
  """
  All values greater than the given value.
  """
  yelpId_gt: String
  """
  All values greater than or equal the given value.
  """
  yelpId_gte: String
  """
  All values containing the given string.
  """
  yelpId_contains: String
  """
  All values not containing the given string.
  """
  yelpId_not_contains: String
  """
  All values starting with the given string.
  """
  yelpId_starts_with: String
  """
  All values not starting with the given string.
  """
  yelpId_not_starts_with: String
  """
  All values ending with the given string.
  """
  yelpId_ends_with: String
  """
  All values not ending with the given string.
  """
  yelpId_not_ends_with: String
  price: String
  """
  All values that are not equal to given value.
  """
  price_not: String
  """
  All values that are contained in given list.
  """
  price_in: [String!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [String!]
  """
  All values less than the given value.
  """
  price_lt: String
  """
  All values less than or equal the given value.
  """
  price_lte: String
  """
  All values greater than the given value.
  """
  price_gt: String
  """
  All values greater than or equal the given value.
  """
  price_gte: String
  """
  All values containing the given string.
  """
  price_contains: String
  """
  All values not containing the given string.
  """
  price_not_contains: String
  """
  All values starting with the given string.
  """
  price_starts_with: String
  """
  All values not starting with the given string.
  """
  price_not_starts_with: String
  """
  All values ending with the given string.
  """
  price_ends_with: String
  """
  All values not ending with the given string.
  """
  price_not_ends_with: String
  photos: String
  """
  All values that are not equal to given value.
  """
  photos_not: String
  """
  All values that are contained in given list.
  """
  photos_in: [String!]
  """
  All values that are not contained in given list.
  """
  photos_not_in: [String!]
  """
  All values less than the given value.
  """
  photos_lt: String
  """
  All values less than or equal the given value.
  """
  photos_lte: String
  """
  All values greater than the given value.
  """
  photos_gt: String
  """
  All values greater than or equal the given value.
  """
  photos_gte: String
  """
  All values containing the given string.
  """
  photos_contains: String
  """
  All values not containing the given string.
  """
  photos_not_contains: String
  """
  All values starting with the given string.
  """
  photos_starts_with: String
  """
  All values not starting with the given string.
  """
  photos_not_starts_with: String
  """
  All values ending with the given string.
  """
  photos_ends_with: String
  """
  All values not ending with the given string.
  """
  photos_not_ends_with: String
  isLoved: Boolean
  """
  All values that are not equal to given value.
  """
  isLoved_not: Boolean
  isWatched: Boolean
  """
  All values that are not equal to given value.
  """
  isWatched_not: Boolean
  location: LocationWhereInput
  coordinates: CoordinatesWhereInput
  categories_every: CategoriesWhereInput
  categories_some: CategoriesWhereInput
  categories_none: CategoriesWhereInput
  watchers_every: WatchingWhereInput
  watchers_some: WatchingWhereInput
  watchers_none: WatchingWhereInput
  lovers_every: LovingWhereInput
  lovers_some: LovingWhereInput
  lovers_none: LovingWhereInput
  _MagicalBackRelation_BusinessToBusinesses_every: BusinessesWhereInput
  _MagicalBackRelation_BusinessToBusinesses_some: BusinessesWhereInput
  _MagicalBackRelation_BusinessToBusinesses_none: BusinessesWhereInput
}

input BusinessWhereUniqueInput {
  id: ID
}

type Categories {
  title: String
}

"""
A connection to a list of items.
"""
type CategoriesConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CategoriesEdge]!
  aggregate: AggregateCategories!
}

input CategoriesCreateInput {
  title: String
}

input CategoriesCreateManyInput {
  create: [CategoriesCreateInput!]
}

"""
An edge in a connection.
"""
type CategoriesEdge {
  """
  The item at the end of the edge.
  """
  node: Categories!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CategoriesOrderByInput {
  title_ASC
  title_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoriesPreviousValues {
  title: String
}

type CategoriesSubscriptionPayload {
  mutation: MutationType!
  node: Categories
  updatedFields: [String!]
  previousValues: CategoriesPreviousValues
}

input CategoriesSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategoriesSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategoriesSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategoriesSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoriesWhereInput
}

input CategoriesUpdateInput {
  title: String
}

input CategoriesUpdateManyInput {
  create: [CategoriesCreateInput!]
}

input CategoriesWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategoriesWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategoriesWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategoriesWhereInput!]
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  _MagicalBackRelation_BusinessToCategories_every: BusinessWhereInput
  _MagicalBackRelation_BusinessToCategories_some: BusinessWhereInput
  _MagicalBackRelation_BusinessToCategories_none: BusinessWhereInput
}

type Coordinates {
  latitude: Float
  longitude: Float
}

"""
A connection to a list of items.
"""
type CoordinatesConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CoordinatesEdge]!
  aggregate: AggregateCoordinates!
}

input CoordinatesCreateInput {
  latitude: Float
  longitude: Float
}

input CoordinatesCreateOneInput {
  create: CoordinatesCreateInput
}

"""
An edge in a connection.
"""
type CoordinatesEdge {
  """
  The item at the end of the edge.
  """
  node: Coordinates!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CoordinatesOrderByInput {
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CoordinatesPreviousValues {
  latitude: Float
  longitude: Float
}

type CoordinatesSubscriptionPayload {
  mutation: MutationType!
  node: Coordinates
  updatedFields: [String!]
  previousValues: CoordinatesPreviousValues
}

input CoordinatesSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CoordinatesSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CoordinatesSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CoordinatesSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CoordinatesWhereInput
}

input CoordinatesUpdateDataInput {
  latitude: Float
  longitude: Float
}

input CoordinatesUpdateInput {
  latitude: Float
  longitude: Float
}

input CoordinatesUpdateOneInput {
  create: CoordinatesCreateInput
  disconnect: Boolean
  delete: Boolean
  update: CoordinatesUpdateDataInput
  upsert: CoordinatesUpsertNestedInput
}

input CoordinatesUpsertNestedInput {
  update: CoordinatesUpdateDataInput!
  create: CoordinatesCreateInput!
}

input CoordinatesWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CoordinatesWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CoordinatesWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CoordinatesWhereInput!]
  latitude: Float
  """
  All values that are not equal to given value.
  """
  latitude_not: Float
  """
  All values that are contained in given list.
  """
  latitude_in: [Float!]
  """
  All values that are not contained in given list.
  """
  latitude_not_in: [Float!]
  """
  All values less than the given value.
  """
  latitude_lt: Float
  """
  All values less than or equal the given value.
  """
  latitude_lte: Float
  """
  All values greater than the given value.
  """
  latitude_gt: Float
  """
  All values greater than or equal the given value.
  """
  latitude_gte: Float
  longitude: Float
  """
  All values that are not equal to given value.
  """
  longitude_not: Float
  """
  All values that are contained in given list.
  """
  longitude_in: [Float!]
  """
  All values that are not contained in given list.
  """
  longitude_not_in: [Float!]
  """
  All values less than the given value.
  """
  longitude_lt: Float
  """
  All values less than or equal the given value.
  """
  longitude_lte: Float
  """
  All values greater than the given value.
  """
  longitude_gt: Float
  """
  All values greater than or equal the given value.
  """
  longitude_gte: Float
  _MagicalBackRelation_BusinessToCoordinates_every: BusinessWhereInput
  _MagicalBackRelation_BusinessToCoordinates_some: BusinessWhereInput
  _MagicalBackRelation_BusinessToCoordinates_none: BusinessWhereInput
}

scalar DateTime

type Location {
  address1: String!
  city: String!
  state: String
  country: String!
}

"""
A connection to a list of items.
"""
type LocationConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  address1: String!
  city: String!
  state: String
  country: String!
}

input LocationCreateOneInput {
  create: LocationCreateInput
}

"""
An edge in a connection.
"""
type LocationEdge {
  """
  The item at the end of the edge.
  """
  node: Location!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LocationOrderByInput {
  address1_ASC
  address1_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  address1: String!
  city: String!
  state: String
  country: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LocationSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  address1: String
  city: String
  state: String
  country: String
}

input LocationUpdateInput {
  address1: String
  city: String
  state: String
  country: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LocationWhereInput!]
  address1: String
  """
  All values that are not equal to given value.
  """
  address1_not: String
  """
  All values that are contained in given list.
  """
  address1_in: [String!]
  """
  All values that are not contained in given list.
  """
  address1_not_in: [String!]
  """
  All values less than the given value.
  """
  address1_lt: String
  """
  All values less than or equal the given value.
  """
  address1_lte: String
  """
  All values greater than the given value.
  """
  address1_gt: String
  """
  All values greater than or equal the given value.
  """
  address1_gte: String
  """
  All values containing the given string.
  """
  address1_contains: String
  """
  All values not containing the given string.
  """
  address1_not_contains: String
  """
  All values starting with the given string.
  """
  address1_starts_with: String
  """
  All values not starting with the given string.
  """
  address1_not_starts_with: String
  """
  All values ending with the given string.
  """
  address1_ends_with: String
  """
  All values not ending with the given string.
  """
  address1_not_ends_with: String
  city: String
  """
  All values that are not equal to given value.
  """
  city_not: String
  """
  All values that are contained in given list.
  """
  city_in: [String!]
  """
  All values that are not contained in given list.
  """
  city_not_in: [String!]
  """
  All values less than the given value.
  """
  city_lt: String
  """
  All values less than or equal the given value.
  """
  city_lte: String
  """
  All values greater than the given value.
  """
  city_gt: String
  """
  All values greater than or equal the given value.
  """
  city_gte: String
  """
  All values containing the given string.
  """
  city_contains: String
  """
  All values not containing the given string.
  """
  city_not_contains: String
  """
  All values starting with the given string.
  """
  city_starts_with: String
  """
  All values not starting with the given string.
  """
  city_not_starts_with: String
  """
  All values ending with the given string.
  """
  city_ends_with: String
  """
  All values not ending with the given string.
  """
  city_not_ends_with: String
  state: String
  """
  All values that are not equal to given value.
  """
  state_not: String
  """
  All values that are contained in given list.
  """
  state_in: [String!]
  """
  All values that are not contained in given list.
  """
  state_not_in: [String!]
  """
  All values less than the given value.
  """
  state_lt: String
  """
  All values less than or equal the given value.
  """
  state_lte: String
  """
  All values greater than the given value.
  """
  state_gt: String
  """
  All values greater than or equal the given value.
  """
  state_gte: String
  """
  All values containing the given string.
  """
  state_contains: String
  """
  All values not containing the given string.
  """
  state_not_contains: String
  """
  All values starting with the given string.
  """
  state_starts_with: String
  """
  All values not starting with the given string.
  """
  state_not_starts_with: String
  """
  All values ending with the given string.
  """
  state_ends_with: String
  """
  All values not ending with the given string.
  """
  state_not_ends_with: String
  country: String
  """
  All values that are not equal to given value.
  """
  country_not: String
  """
  All values that are contained in given list.
  """
  country_in: [String!]
  """
  All values that are not contained in given list.
  """
  country_not_in: [String!]
  """
  All values less than the given value.
  """
  country_lt: String
  """
  All values less than or equal the given value.
  """
  country_lte: String
  """
  All values greater than the given value.
  """
  country_gt: String
  """
  All values greater than or equal the given value.
  """
  country_gte: String
  """
  All values containing the given string.
  """
  country_contains: String
  """
  All values not containing the given string.
  """
  country_not_contains: String
  """
  All values starting with the given string.
  """
  country_starts_with: String
  """
  All values not starting with the given string.
  """
  country_not_starts_with: String
  """
  All values ending with the given string.
  """
  country_ends_with: String
  """
  All values not ending with the given string.
  """
  country_not_ends_with: String
  _MagicalBackRelation_BusinessToLocation_every: BusinessWhereInput
  _MagicalBackRelation_BusinessToLocation_some: BusinessWhereInput
  _MagicalBackRelation_BusinessToLocation_none: BusinessWhereInput
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Loving implements Node {
  id: ID!
  business(where: BusinessWhereInput): Business!
  lover(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type LovingConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LovingEdge]!
  aggregate: AggregateLoving!
}

input LovingCreateInput {
  business: BusinessCreateOneWithoutLoversInput!
  lover: UserCreateOneWithoutLovingInput!
}

input LovingCreateManyWithoutBusinessInput {
  create: [LovingCreateWithoutBusinessInput!]
  connect: [LovingWhereUniqueInput!]
}

input LovingCreateManyWithoutLoverInput {
  create: [LovingCreateWithoutLoverInput!]
  connect: [LovingWhereUniqueInput!]
}

input LovingCreateWithoutBusinessInput {
  lover: UserCreateOneWithoutLovingInput!
}

input LovingCreateWithoutLoverInput {
  business: BusinessCreateOneWithoutLoversInput!
}

"""
An edge in a connection.
"""
type LovingEdge {
  """
  The item at the end of the edge.
  """
  node: Loving!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LovingOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LovingPreviousValues {
  id: ID!
}

type LovingSubscriptionPayload {
  mutation: MutationType!
  node: Loving
  updatedFields: [String!]
  previousValues: LovingPreviousValues
}

input LovingSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LovingSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LovingSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LovingSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LovingWhereInput
}

input LovingUpdateInput {
  business: BusinessUpdateOneWithoutLoversInput
  lover: UserUpdateOneWithoutLovingInput
}

input LovingUpdateManyWithoutBusinessInput {
  create: [LovingCreateWithoutBusinessInput!]
  connect: [LovingWhereUniqueInput!]
  disconnect: [LovingWhereUniqueInput!]
  delete: [LovingWhereUniqueInput!]
  update: [LovingUpdateWithWhereUniqueWithoutBusinessInput!]
  upsert: [LovingUpsertWithWhereUniqueWithoutBusinessInput!]
}

input LovingUpdateManyWithoutLoverInput {
  create: [LovingCreateWithoutLoverInput!]
  connect: [LovingWhereUniqueInput!]
  disconnect: [LovingWhereUniqueInput!]
  delete: [LovingWhereUniqueInput!]
  update: [LovingUpdateWithWhereUniqueWithoutLoverInput!]
  upsert: [LovingUpsertWithWhereUniqueWithoutLoverInput!]
}

input LovingUpdateWithoutBusinessDataInput {
  lover: UserUpdateOneWithoutLovingInput
}

input LovingUpdateWithoutLoverDataInput {
  business: BusinessUpdateOneWithoutLoversInput
}

input LovingUpdateWithWhereUniqueWithoutBusinessInput {
  where: LovingWhereUniqueInput!
  data: LovingUpdateWithoutBusinessDataInput!
}

input LovingUpdateWithWhereUniqueWithoutLoverInput {
  where: LovingWhereUniqueInput!
  data: LovingUpdateWithoutLoverDataInput!
}

input LovingUpsertWithWhereUniqueWithoutBusinessInput {
  where: LovingWhereUniqueInput!
  update: LovingUpdateWithoutBusinessDataInput!
  create: LovingCreateWithoutBusinessInput!
}

input LovingUpsertWithWhereUniqueWithoutLoverInput {
  where: LovingWhereUniqueInput!
  update: LovingUpdateWithoutLoverDataInput!
  create: LovingCreateWithoutLoverInput!
}

input LovingWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LovingWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LovingWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LovingWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  business: BusinessWhereInput
  lover: UserWhereInput
}

input LovingWhereUniqueInput {
  id: ID
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  watching(where: WatchingWhereInput, orderBy: WatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Watching!]
  loving(where: LovingWhereInput, orderBy: LovingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Loving!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  watching: WatchingCreateManyWithoutWatcherInput
  loving: LovingCreateManyWithoutLoverInput
}

input UserCreateOneWithoutLovingInput {
  create: UserCreateWithoutLovingInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWatchingInput {
  create: UserCreateWithoutWatchingInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLovingInput {
  email: String!
  password: String!
  name: String!
  watching: WatchingCreateManyWithoutWatcherInput
}

input UserCreateWithoutWatchingInput {
  email: String!
  password: String!
  name: String!
  loving: LovingCreateManyWithoutLoverInput
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  watching: WatchingUpdateManyWithoutWatcherInput
  loving: LovingUpdateManyWithoutLoverInput
}

input UserUpdateOneWithoutLovingInput {
  create: UserCreateWithoutLovingInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutLovingDataInput
  upsert: UserUpsertWithoutLovingInput
}

input UserUpdateOneWithoutWatchingInput {
  create: UserCreateWithoutWatchingInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutWatchingDataInput
  upsert: UserUpsertWithoutWatchingInput
}

input UserUpdateWithoutLovingDataInput {
  email: String
  password: String
  name: String
  watching: WatchingUpdateManyWithoutWatcherInput
}

input UserUpdateWithoutWatchingDataInput {
  email: String
  password: String
  name: String
  loving: LovingUpdateManyWithoutLoverInput
}

input UserUpsertWithoutLovingInput {
  update: UserUpdateWithoutLovingDataInput!
  create: UserCreateWithoutLovingInput!
}

input UserUpsertWithoutWatchingInput {
  update: UserUpdateWithoutWatchingDataInput!
  create: UserCreateWithoutWatchingInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  watching_every: WatchingWhereInput
  watching_some: WatchingWhereInput
  watching_none: WatchingWhereInput
  loving_every: LovingWhereInput
  loving_some: LovingWhereInput
  loving_none: LovingWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Watching implements Node {
  id: ID!
  business(where: BusinessWhereInput): Business!
  watcher(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type WatchingConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [WatchingEdge]!
  aggregate: AggregateWatching!
}

input WatchingCreateInput {
  business: BusinessCreateOneWithoutWatchersInput!
  watcher: UserCreateOneWithoutWatchingInput!
}

input WatchingCreateManyWithoutBusinessInput {
  create: [WatchingCreateWithoutBusinessInput!]
  connect: [WatchingWhereUniqueInput!]
}

input WatchingCreateManyWithoutWatcherInput {
  create: [WatchingCreateWithoutWatcherInput!]
  connect: [WatchingWhereUniqueInput!]
}

input WatchingCreateWithoutBusinessInput {
  watcher: UserCreateOneWithoutWatchingInput!
}

input WatchingCreateWithoutWatcherInput {
  business: BusinessCreateOneWithoutWatchersInput!
}

"""
An edge in a connection.
"""
type WatchingEdge {
  """
  The item at the end of the edge.
  """
  node: Watching!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum WatchingOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WatchingPreviousValues {
  id: ID!
}

type WatchingSubscriptionPayload {
  mutation: MutationType!
  node: Watching
  updatedFields: [String!]
  previousValues: WatchingPreviousValues
}

input WatchingSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [WatchingSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [WatchingSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [WatchingSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WatchingWhereInput
}

input WatchingUpdateInput {
  business: BusinessUpdateOneWithoutWatchersInput
  watcher: UserUpdateOneWithoutWatchingInput
}

input WatchingUpdateManyWithoutBusinessInput {
  create: [WatchingCreateWithoutBusinessInput!]
  connect: [WatchingWhereUniqueInput!]
  disconnect: [WatchingWhereUniqueInput!]
  delete: [WatchingWhereUniqueInput!]
  update: [WatchingUpdateWithWhereUniqueWithoutBusinessInput!]
  upsert: [WatchingUpsertWithWhereUniqueWithoutBusinessInput!]
}

input WatchingUpdateManyWithoutWatcherInput {
  create: [WatchingCreateWithoutWatcherInput!]
  connect: [WatchingWhereUniqueInput!]
  disconnect: [WatchingWhereUniqueInput!]
  delete: [WatchingWhereUniqueInput!]
  update: [WatchingUpdateWithWhereUniqueWithoutWatcherInput!]
  upsert: [WatchingUpsertWithWhereUniqueWithoutWatcherInput!]
}

input WatchingUpdateWithoutBusinessDataInput {
  watcher: UserUpdateOneWithoutWatchingInput
}

input WatchingUpdateWithoutWatcherDataInput {
  business: BusinessUpdateOneWithoutWatchersInput
}

input WatchingUpdateWithWhereUniqueWithoutBusinessInput {
  where: WatchingWhereUniqueInput!
  data: WatchingUpdateWithoutBusinessDataInput!
}

input WatchingUpdateWithWhereUniqueWithoutWatcherInput {
  where: WatchingWhereUniqueInput!
  data: WatchingUpdateWithoutWatcherDataInput!
}

input WatchingUpsertWithWhereUniqueWithoutBusinessInput {
  where: WatchingWhereUniqueInput!
  update: WatchingUpdateWithoutBusinessDataInput!
  create: WatchingCreateWithoutBusinessInput!
}

input WatchingUpsertWithWhereUniqueWithoutWatcherInput {
  where: WatchingWhereUniqueInput!
  update: WatchingUpdateWithoutWatcherDataInput!
  create: WatchingCreateWithoutWatcherInput!
}

input WatchingWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [WatchingWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [WatchingWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [WatchingWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  business: BusinessWhereInput
  watcher: UserWhereInput
}

input WatchingWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createBusinesses(data: BusinessesCreateInput!): Businesses!
  createLoving(data: LovingCreateInput!): Loving!
  createWatching(data: WatchingCreateInput!): Watching!
  createLocation(data: LocationCreateInput!): Location!
  createCoordinates(data: CoordinatesCreateInput!): Coordinates!
  createBusiness(data: BusinessCreateInput!): Business!
  createCategories(data: CategoriesCreateInput!): Categories!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLoving(data: LovingUpdateInput!, where: LovingWhereUniqueInput!): Loving
  updateWatching(data: WatchingUpdateInput!, where: WatchingWhereUniqueInput!): Watching
  updateBusiness(data: BusinessUpdateInput!, where: BusinessWhereUniqueInput!): Business
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLoving(where: LovingWhereUniqueInput!): Loving
  deleteWatching(where: WatchingWhereUniqueInput!): Watching
  deleteBusiness(where: BusinessWhereUniqueInput!): Business
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLoving(where: LovingWhereUniqueInput!, create: LovingCreateInput!, update: LovingUpdateInput!): Loving!
  upsertWatching(where: WatchingWhereUniqueInput!, create: WatchingCreateInput!, update: WatchingUpdateInput!): Watching!
  upsertBusiness(where: BusinessWhereUniqueInput!, create: BusinessCreateInput!, update: BusinessUpdateInput!): Business!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyBusinesseses(data: BusinessesUpdateInput!, where: BusinessesWhereInput): BatchPayload!
  updateManyLovings(data: LovingUpdateInput!, where: LovingWhereInput): BatchPayload!
  updateManyWatchings(data: WatchingUpdateInput!, where: WatchingWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyCoordinateses(data: CoordinatesUpdateInput!, where: CoordinatesWhereInput): BatchPayload!
  updateManyBusinesses(data: BusinessUpdateInput!, where: BusinessWhereInput): BatchPayload!
  updateManyCategorieses(data: CategoriesUpdateInput!, where: CategoriesWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBusinesseses(where: BusinessesWhereInput): BatchPayload!
  deleteManyLovings(where: LovingWhereInput): BatchPayload!
  deleteManyWatchings(where: WatchingWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyCoordinateses(where: CoordinatesWhereInput): BatchPayload!
  deleteManyBusinesses(where: BusinessWhereInput): BatchPayload!
  deleteManyCategorieses(where: CategoriesWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  businesseses(where: BusinessesWhereInput, orderBy: BusinessesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Businesses]!
  lovings(where: LovingWhereInput, orderBy: LovingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Loving]!
  watchings(where: WatchingWhereInput, orderBy: WatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Watching]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  coordinateses(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coordinates]!
  businesses(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business]!
  categorieses(where: CategoriesWhereInput, orderBy: CategoriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Categories]!
  user(where: UserWhereUniqueInput!): User
  loving(where: LovingWhereUniqueInput!): Loving
  watching(where: WatchingWhereUniqueInput!): Watching
  business(where: BusinessWhereUniqueInput!): Business
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  businessesesConnection(where: BusinessesWhereInput, orderBy: BusinessesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessesConnection!
  lovingsConnection(where: LovingWhereInput, orderBy: LovingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LovingConnection!
  watchingsConnection(where: WatchingWhereInput, orderBy: WatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WatchingConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  coordinatesesConnection(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoordinatesConnection!
  businessesConnection(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessConnection!
  categoriesesConnection(where: CategoriesWhereInput, orderBy: CategoriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoriesConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  businesses(where: BusinessesSubscriptionWhereInput): BusinessesSubscriptionPayload
  loving(where: LovingSubscriptionWhereInput): LovingSubscriptionPayload
  watching(where: WatchingSubscriptionWhereInput): WatchingSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  coordinates(where: CoordinatesSubscriptionWhereInput): CoordinatesSubscriptionPayload
  business(where: BusinessSubscriptionWhereInput): BusinessSubscriptionPayload
  categories(where: CategoriesSubscriptionWhereInput): CategoriesSubscriptionPayload
}
`

module.exports.Prisma = class Binding extends Prisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });

    var self = this
    this.exists = {
      User(where) {
        return super.existsDelegate('query', 'users', { where }, {}, '{ id }')
      },
      Businesses(where) {
        return super.existsDelegate('query', 'businesseses', { where }, {}, '{ id }')
      },
      Loving(where) {
        return super.existsDelegate('query', 'lovings', { where }, {}, '{ id }')
      },
      Watching(where) {
        return super.existsDelegate('query', 'watchings', { where }, {}, '{ id }')
      },
      Location(where) {
        return super.existsDelegate('query', 'locations', { where }, {}, '{ id }')
      },
      Coordinates(where) {
        return super.existsDelegate('query', 'coordinateses', { where }, {}, '{ id }')
      },
      Business(where) {
        return super.existsDelegate('query', 'businesses', { where }, {}, '{ id }')
      },
      Categories(where) {
        return super.existsDelegate('query', 'categorieses', { where }, {}, '{ id }')
      }
    }

    this.query = {
      users(args, info) { 
        return self.delegate('query', 'users', args, {}, info)
      },
      businesseses(args, info) { 
        return self.delegate('query', 'businesseses', args, {}, info)
      },
      lovings(args, info) { 
        return self.delegate('query', 'lovings', args, {}, info)
      },
      watchings(args, info) { 
        return self.delegate('query', 'watchings', args, {}, info)
      },
      locations(args, info) { 
        return self.delegate('query', 'locations', args, {}, info)
      },
      coordinateses(args, info) { 
        return self.delegate('query', 'coordinateses', args, {}, info)
      },
      businesses(args, info) { 
        return self.delegate('query', 'businesses', args, {}, info)
      },
      categorieses(args, info) { 
        return self.delegate('query', 'categorieses', args, {}, info)
      },
      user(args, info) { 
        return self.delegate('query', 'user', args, {}, info)
      },
      loving(args, info) { 
        return self.delegate('query', 'loving', args, {}, info)
      },
      watching(args, info) { 
        return self.delegate('query', 'watching', args, {}, info)
      },
      business(args, info) { 
        return self.delegate('query', 'business', args, {}, info)
      },
      usersConnection(args, info) { 
        return self.delegate('query', 'usersConnection', args, {}, info)
      },
      businessesesConnection(args, info) { 
        return self.delegate('query', 'businessesesConnection', args, {}, info)
      },
      lovingsConnection(args, info) { 
        return self.delegate('query', 'lovingsConnection', args, {}, info)
      },
      watchingsConnection(args, info) { 
        return self.delegate('query', 'watchingsConnection', args, {}, info)
      },
      locationsConnection(args, info) { 
        return self.delegate('query', 'locationsConnection', args, {}, info)
      },
      coordinatesesConnection(args, info) { 
        return self.delegate('query', 'coordinatesesConnection', args, {}, info)
      },
      businessesConnection(args, info) { 
        return self.delegate('query', 'businessesConnection', args, {}, info)
      },
      categoriesesConnection(args, info) { 
        return self.delegate('query', 'categoriesesConnection', args, {}, info)
      },
      node(args, info) { 
        return self.delegate('query', 'node', args, {}, info)
      }
    }
      
    this.mutation = {
      createUser(args, info) { 
        return self.delegate('mutation', 'createUser', args, {}, info)
      },
      createBusinesses(args, info) { 
        return self.delegate('mutation', 'createBusinesses', args, {}, info)
      },
      createLoving(args, info) { 
        return self.delegate('mutation', 'createLoving', args, {}, info)
      },
      createWatching(args, info) { 
        return self.delegate('mutation', 'createWatching', args, {}, info)
      },
      createLocation(args, info) { 
        return self.delegate('mutation', 'createLocation', args, {}, info)
      },
      createCoordinates(args, info) { 
        return self.delegate('mutation', 'createCoordinates', args, {}, info)
      },
      createBusiness(args, info) { 
        return self.delegate('mutation', 'createBusiness', args, {}, info)
      },
      createCategories(args, info) { 
        return self.delegate('mutation', 'createCategories', args, {}, info)
      },
      updateUser(args, info) { 
        return self.delegate('mutation', 'updateUser', args, {}, info)
      },
      updateLoving(args, info) { 
        return self.delegate('mutation', 'updateLoving', args, {}, info)
      },
      updateWatching(args, info) { 
        return self.delegate('mutation', 'updateWatching', args, {}, info)
      },
      updateBusiness(args, info) { 
        return self.delegate('mutation', 'updateBusiness', args, {}, info)
      },
      deleteUser(args, info) { 
        return self.delegate('mutation', 'deleteUser', args, {}, info)
      },
      deleteLoving(args, info) { 
        return self.delegate('mutation', 'deleteLoving', args, {}, info)
      },
      deleteWatching(args, info) { 
        return self.delegate('mutation', 'deleteWatching', args, {}, info)
      },
      deleteBusiness(args, info) { 
        return self.delegate('mutation', 'deleteBusiness', args, {}, info)
      },
      upsertUser(args, info) { 
        return self.delegate('mutation', 'upsertUser', args, {}, info)
      },
      upsertLoving(args, info) { 
        return self.delegate('mutation', 'upsertLoving', args, {}, info)
      },
      upsertWatching(args, info) { 
        return self.delegate('mutation', 'upsertWatching', args, {}, info)
      },
      upsertBusiness(args, info) { 
        return self.delegate('mutation', 'upsertBusiness', args, {}, info)
      },
      updateManyUsers(args, info) { 
        return self.delegate('mutation', 'updateManyUsers', args, {}, info)
      },
      updateManyBusinesseses(args, info) { 
        return self.delegate('mutation', 'updateManyBusinesseses', args, {}, info)
      },
      updateManyLovings(args, info) { 
        return self.delegate('mutation', 'updateManyLovings', args, {}, info)
      },
      updateManyWatchings(args, info) { 
        return self.delegate('mutation', 'updateManyWatchings', args, {}, info)
      },
      updateManyLocations(args, info) { 
        return self.delegate('mutation', 'updateManyLocations', args, {}, info)
      },
      updateManyCoordinateses(args, info) { 
        return self.delegate('mutation', 'updateManyCoordinateses', args, {}, info)
      },
      updateManyBusinesses(args, info) { 
        return self.delegate('mutation', 'updateManyBusinesses', args, {}, info)
      },
      updateManyCategorieses(args, info) { 
        return self.delegate('mutation', 'updateManyCategorieses', args, {}, info)
      },
      deleteManyUsers(args, info) { 
        return self.delegate('mutation', 'deleteManyUsers', args, {}, info)
      },
      deleteManyBusinesseses(args, info) { 
        return self.delegate('mutation', 'deleteManyBusinesseses', args, {}, info)
      },
      deleteManyLovings(args, info) { 
        return self.delegate('mutation', 'deleteManyLovings', args, {}, info)
      },
      deleteManyWatchings(args, info) { 
        return self.delegate('mutation', 'deleteManyWatchings', args, {}, info)
      },
      deleteManyLocations(args, info) { 
        return self.delegate('mutation', 'deleteManyLocations', args, {}, info)
      },
      deleteManyCoordinateses(args, info) { 
        return self.delegate('mutation', 'deleteManyCoordinateses', args, {}, info)
      },
      deleteManyBusinesses(args, info) { 
        return self.delegate('mutation', 'deleteManyBusinesses', args, {}, info)
      },
      deleteManyCategorieses(args, info) { 
        return self.delegate('mutation', 'deleteManyCategorieses', args, {}, info)
      }
    }
      
    this.subscription = {
      user(args, infoOrQuery) { 
        return self.delegateSubscription('user', args, {}, infoOrQuery)
      },
      businesses(args, infoOrQuery) { 
        return self.delegateSubscription('businesses', args, {}, infoOrQuery)
      },
      loving(args, infoOrQuery) { 
        return self.delegateSubscription('loving', args, {}, infoOrQuery)
      },
      watching(args, infoOrQuery) { 
        return self.delegateSubscription('watching', args, {}, infoOrQuery)
      },
      location(args, infoOrQuery) { 
        return self.delegateSubscription('location', args, {}, infoOrQuery)
      },
      coordinates(args, infoOrQuery) { 
        return self.delegateSubscription('coordinates', args, {}, infoOrQuery)
      },
      business(args, infoOrQuery) { 
        return self.delegateSubscription('business', args, {}, infoOrQuery)
      },
      categories(args, infoOrQuery) { 
        return self.delegateSubscription('categories', args, {}, infoOrQuery)
      }
    }
  }
  
  delegate(operation, field, args, context, info) {
    return super.delegate(operation, field, args, context, info)
  }
}