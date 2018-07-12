const {
  getUserId
} = require('../../utils')

const place = {
  async createPlace(parent, args, context, info) {
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
    const newPlace = await context.db.mutation.createBusiness({
        data: {
          yelpId: args.yelpId,
          name: args.name,
          price: args.price,
          photos: args.photos,
          location: {
            create: {
              address1: args.address,
              city: args.city,
              state: args.state,
              country: args.country
            }
          },
          coordinates: {
            create: {
              longitude: args.longitude,
              latitude: args.latitude
            }
          },
          categories: {
            create: {
              title: args.cat_title
            }
          }
        }
      },
      info
    )
    if (newPlace) {
      return newPlace
    }
    throw new Error(`Place can't be created`)
  },
  async addLovePlace(parent, args, context, info) {
    const userId = getUserId(context)

    const isLoved = await context.db.exists.Loving({
      lover: {
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
          lover: {
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
  /* TODO
   * check removeLovePlace
   * Implement addWatchPlace and removeWatchPlace
   */
  async removeLovePlace(parent, args, context, info) {
    const userId = getUserId(context)
    const isLoved = await context.db.exists.Loving({
      id: {
        id: args.id
      },
      lover: {
        id: userId
      }
    })

    if (!isLoved) {
      throw new Error(`Doesn't exist love id: ${args.id}`)
    }
    return context.db.mutation.deleteLoving({
      where: {
        id: args.id
      },
      info
    })
  },
  async addWatchPlace(parent, {
    placeId
  }, context, info) {
    const userId = getUserId(context)
    console.log('watch', userId)
  }
}

module.exports = {
  place
}