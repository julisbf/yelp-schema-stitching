const {
  getUserId
} = require('../../utils')

const business = {
  async createBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    if (!userId) {
      throw new Error(`Invalid permissions, you must be an active user`)
    }

    const placeExists = await context.db.exists.Business({
        yelpId: args.yelpId
      },
      info
    )
    if (placeExists) {
      throw new Error(`${args.name} already created`)
    }
    console.log(args.categories)
    const newPlace = await context.db.mutation.createBusiness({
        data: {
          yelpId: args.yelpId,
          name: args.name,
          price: args.price,
          photos: args.photos,
          location: args.location,
          coordinates: args.coordinates,
          categories: args.categories
        }
      },
      info
    )
    if (newPlace) {
      return newPlace
    }
    throw new Error(`Place can't be created`)
  },
  async updateBusiness(parent, args, context, info) {
    const updates = { ...args
    }
    //const category = updates.cat_title;
    console.log(updates)
    delete updates.id

    //if (updates.hasOwnProperty('location'))

    return context.db.mutation.updateBusiness({
      where: {
        id: args.id
      },
      data: {
        ...updates,
      }
    }, info)
  },
  async addLoveToBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    const isLoved = await context.db.exists.Loving({
      user: {
        id: userId
      },
      business: {
        id: args.placeId
      }
    })

    if (isLoved) {
      throw new Error('Already loving')
    }

    return context.db.mutation.createLoving({
        data: {
          user: {
            connect: {
              id: userId
            }
          },
          business: {
            connect: {
              id: args.placeId
            }
          }
        }
      },
      info
    )
  },
  async removeLoveToBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    const loving = await context.db.query.lovings({
      user: {
        id: userId
      },
      business: {
        id: args.placeId
      }
    })
    if (loving) {
      return context.db.mutation.deleteLoving({
          where: {
            id: loving[0].id
          }
        },
        info
      )
    }

    throw new Error(`User doesn't love this place`)
  },
  async addWatchToBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    const isWatched = await context.db.exists.Watching({
      user: {
        id: userId
      },
      business: {
        id: args.placeId
      }
    })

    if (isWatched) {
      throw new Error('Already watching')
    }

    return context.db.mutation.createWatching({
        data: {
          user: {
            connect: {
              id: userId
            }
          },
          business: {
            connect: {
              id: args.placeId
            }
          }
        }
      },
      info
    )
  },
  async removeWatchToBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    const watching = await context.db.query.watchings({
      watcher: {
        id: userId
      },
      business: {
        id: args.placeId
      }
    })
    if (watching) {
      return context.db.mutation.deleteWatching({
          where: {
            id: watching[0].id
          }
        },
        info
      )
    }

    throw new Error(`User is not watching this place`)
  }
}

module.exports = {
  business
}