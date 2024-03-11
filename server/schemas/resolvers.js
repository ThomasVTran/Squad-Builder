const { Game, Player, Squad } = require("../models/index");
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    players: async () => {
      return Player.find({}).populate("friends");
    },
    player: async (parent, { username }) => {
      return Player.findOne({ username }).populate("friends", "squads");
    },
    games: async () => {
      return Game.find({});
    },
    games: async (parent, { gameId }) => {
      return Game.findOne({ _id: gameId }).populate("squads");
    },
    squad: async (parent, { squadId }) => {
      return Squad.findOne({ _id: squadId });
    },
    squads: async (parent, { username }) => {
      return Squad.find({ username });
    },
    squads: async (parent, { gameName }) => {
      return Squad.find({ name: gameName });
    },
  },

  Mutation: {
    addPlayer: async (parent, { username, email, password }) => {
      const player = await Player.create({ username, email, password });
      const token = signToken(player);
      return { token, player };
    },
    login: async (parent, { email, password }) => {
      const player = await Player.findOne({ email });
      if (!player) {
        throw AuthenticationError;
      }
      pwMatch = await player.isCorrectPassword(password);
      if (!pwMatch) {
        throw AuthenticationError;
      }
      const token = signToken(player);
      return { token, player };
    },
    removePlayer: async (parent, {playerId}) => {
        return Player.findOneAndDelete({_id: playerId})
    },
    addFriend: async (parent, {playerId, friendId}) => {
        return Player.findOneAndUpdate(
            {_id: playerId},
            {$addToSet: {friends: friendId}},
            {new: true, runValidators: true}
        )
    },
    removeFriend: async (parent, {playerId, friendId}) => {
       return Player.findOneAndUpdate(
        {_id: playerId},
        {$pull: {friends: friendId}},
        {new: true, runValidators: true}
       )
    },
    addGame: async (parent, {name, image, description}) => {
        return Game.create({name, image, description})
    },
    addSquad: async (parent, {playerId, gameId, squadName, playerCount, ranked, playStyle}) => {
        const squad = await Squad.create({
            squadName, playerCount, ranked, playStyle
        })

        await Player.findOneAndUpdate(
            {_id: playerId},
            {$addToSet: {squads: squad}},
        )

        await Game.findOneAndUpdate(
            {_id: gameId},
            {$addToSet: {squads: squad}},
        )
        return squad
    },
    removeSquad: async (parent, {squadId, playerId, gameId}) => {
        const squad = await Squad.findOneAndDelete({_id: squadId})

        await Player.findOneAndUpdate(
            {_id: playerId},
            {$pull: {squads: squad}},
        )

        await Game.findOneAndUpdate(
            {_id: gameId},
            {$pull: {squads: squad}},
        )
        return squad;
    },
  },
};


module.exports = resolvers;