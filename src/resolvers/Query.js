const {
  getUserId
} = require('../utils')

const Query = {
  me(parent, args, context, info) {
    const id = getUserId(context)
    return context.db.query.user({
      where: {
        id
      }
    }, info)
  },
  search(parent, {
    term,
    location,
    limit
  }, context, info) {
    return context.ylp.query.search({
        term,
        location,
        limit
      },
      `{total business {id name price photos location {address1 city state country} coordinates{latitude longitude} categories{title}}}
    `)
  },
  business(parent, {
    id
  }, context, info) {
    return context.ylp.query.business({
        id
      },
      `{id name price photos location{address1 city state country} coordinates{latitude longitude} categories{title}}`)
  },
  async userLovedPlaces(parent, args, context, info) {
    const id = getUserId(context)
    const where = {
      lover: {
        id: id
      }
    }
    const queriedLoves = await context.db.query.lovings({
      where,
      skip: args.skip,
      first: args.first
    })
    if (queriedLoves.length == 0) {
      throw new Error(`No loved places`)
    }
    const countSelectionSet = `
    {
      aggregate {
        count
      }
    }
    `
    const lovingsConnection = await context.db.query.lovingsConnection({}, countSelectionSet)

    return {
      count: lovingsConnection.aggregate.count,
      lovesIds: queriedLoves.map(place => place.id),
    }
  },
  async userWatchedPlaces(parent, args, context, info) {
    const id = getUserId(context)
    const where = {
      watcher: {
        id: id
      }
    }
    const queriedWatches = await context.db.query.watchings({
      where,
      skip: args.skip,
      first: args.first
    })
    if (queriedWatches.length == 0) {
      throw new Error(`No watched places`)
    }
    const countSelectionSet = `
    {
      aggregate {
        count
      }
    }
    `
    const watchingsConnection = await context.db.query.watchingsConnection({}, countSelectionSet)

    return {
      count: watchingsConnection.aggregate.count,
      lovesIds: queriedWatches.map(place => place.id),
    }
  }
}

module.exports = {
  Query
}