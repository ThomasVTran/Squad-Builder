const { game, player, squad } = require('../models/index')

const resolvers = {
    Query: {
        player: async (parent, {username})=> {
            return Player.findOne({username}).populate('squads', 'friends')
        },
        games: async () => {
            return Game.find()
        },
        games: async (parent, {gameId}) => {
            return Game.findOne({_id: gameId}).populate('squads')
        },
        squad: async (parent, {squadId}) => {
            return squad.findOne({_id: squadId})
        },
        squads: async (parent, {username}) => {
            return squad.find({username})
        },
        squads: async (parent, {gameName}) => {
            return squad.find({name: gameName})
        }
    },

    Mutation: {

    }
}