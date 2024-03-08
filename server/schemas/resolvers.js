const { game, player, squad } = require('../models/index')

const resolvers = {
    Query: {
        games: async ()=> {
            return Game.find().populate('')
        }
    },

    Mutation: {

    }
}