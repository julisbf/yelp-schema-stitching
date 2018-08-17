const {
  getUserId
} = require('../../utils')

const business = {
  async createBusiness(parent, args, context, info) {
    const userId = getUserId(context)
    const data = args.data;

    if (!userId) {
      throw new Error(`Invalid permissions, you must be an active user`)
    }

    const placeExists = await context.db.exists.Business({
        yelpId: data.yelpId
      },
      info
    )
    if (placeExists) {
      throw new Error(`A business with Yelp Id: ${data.yelpId} already exist`)
    }

    const newPlace = await context.db.mutation.createBusiness({
        data: {
          ...data
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
    const userId = getUserId(context)
    const updates = { ...args.data
    }
    const bizId = args.where.id;

    const requestingUserIsAdmin = await context.db.exists.User({
      id: userId,
      role: 'ADMIN',
    })

    if (!requestingUserIsAdmin) {
      throw new Error(`You don't have access rights to update it.`)
    }

    const placeExists = await context.db.exists.Business({
        id: bizId
      },
      info
    )

    if (!placeExists) {
      throw new Error(`Place not found`)
    }

    return context.db.mutation.updateBusiness({
      where: {
        id: bizId
      },
      data: {
        ...updates,
      }
    }, info)
  },
  async deleteBusiness(parent, args, context, info) {
    const userId = getUserId(context)

    const requestingUserIsAdmin = await context.db.exists.User({
      id: userId,
      role: 'ADMIN',
    })

    if (!requestingUserIsAdmin) {
      throw new Error(`You don't have access rights to delete it.`)
    }

    const placeExists = await context.db.exists.Business({
        id: args.placeId
      },
      info
    )

    if (!placeExists) {
      throw new Error(`Place not found`)
    }

    return context.db.mutation.deleteBusiness({
      where: {
        id: args.placeId
      }
    })
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