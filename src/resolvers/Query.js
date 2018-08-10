const {
  getUserId
} = require('../utils')
let userId = ''

const Query = {
  me(parent, args, context, info) {
    userId = getUserId(context)
    return context.db.query.user({
      where: {
        id: userId
      }
    }, info)
  },
  async business(parent, {
    id
  }, context, info) {
    const queriedBusiness = await context.db.query.business({
        where: {
          userId
        }
      },
      info)
    if (queriedBusiness) {
      return queriedBusiness
    }

    throw new Error(`Couldn't find business id: ${id}`)
  },
  async businesses(parent, args, context, info) {
    const queriedBusinesses = await context.db.query.businesses({

    }, info)

    if (queriedBusinesses) {
      return queriedBusinesses
    }

    throw new Error(`No businesses have been added`)
  },
  async totalLovingByCurrentUser(parent, args, context, info) {
    userId = getUserId(context)
    return await context.db.query.lovingsConnection({
      where: {
        user: {
          id: userId
        }
      }
    }, info)
  },
  async totalWatchingByCurrentUser(parent, args, context, info) {
    userId = getUserId(context)
    return await context.db.query.watchingsConnection({
      where: {
        user: {
          id: userId
        }
      }
    }, info)
  },
  async totalLovingBusiness(parent, {
    placeId
  }, context, info) {

    return await context.db.query.lovingsConnection({
      where: {
        business: {
          id: placeId
        }
      }
    }, info)
  },
  async totalWatchingBusiness(parent, {
    placeId
  }, context, info) {

    return await context.db.query.watchingsConnection({
      where: {
        business: {
          id: placeId
        }
      }
    }, info)
  }
}

module.exports = {
  Query
}