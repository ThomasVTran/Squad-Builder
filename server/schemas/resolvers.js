// const { game, player, squad } = require("../models/index");

// const resolvers = {
//   Query: {
//     player: async (parent, { username }) => {
//       return player.findOne({ username }).populate("squads", "friends");
//     },
//     games: async () => {
//       return game.find();
//     },
//     games: async (parent, { gameId }) => {
//       return game.findOne({ _id: gameId }).populate("squads");
//     },
//     squad: async (parent, { squadId }) => {
//       return squad.findOne({ _id: squadId });
//     },
//     squads: async (parent, { username }) => {
//       return squad.find({ username });
//     },
//     squads: async (parent, { gameName }) => {
//       return squad.find({ name: gameName });
//     },
//   },

//   Mutation: {
//     addPlayer: async (parent, { username, email, password }) => {
//       const player = await player.create({ username, email, password });
//       const token = signToken(player);
//       return { token, player };
//     },
//     login: async (parent, { email, password }) => {
//       const player = await player.findOne({ email });
//       if (!player) {
//         throw AuthenticationError;
//       }
//       pwMatch = await player.isCorrectPassword(password);
//       if (!pwMatch) {
//         throw AuthenticationError;
//       }
//       const token = signToken(player);
//       return { token, player };
//     },
//     removePlayer: async (parent, {playerId}) => {
//         return player.findOneAndDelete({_id: playerId})
//     },
//     addFriend: async (parent, {playerId, username}) => {
//         return player.findOneAndUpdate(
//             {_id: playerId},
//             {$addToSet: {friends: username}},
//             {new: true, runValidators: true}
//         )
//     },
//     removeFriend: async (parent, {playerId}) => {
//        return player.findOneAndUpdate(
//         {_id: playerId},
//         {$pull: {friends: username}},
//         {new: true, runValidators: true}
//        )
//     },
//     addGame: async (parent, {name, image, platforms, rating, review}) => {
//         return game.create({name, image, platforms, rating, review})
//     },
//     addSquad: async (squadName, playerCount, ranked, playStyle) => {
//         const squad = await squad.create({
//             squadName, playerCount, ranked, playStyle
//         })

//         await player.findOneAndUpdate(
//             {_id: playerId},
//             {$addToSet: {squads: squad}},
//         )

//         await game.findOneAndUpdate(
//             {_id: gameId},
//             {$addToSet: {squads: squad}},
//         )
//         return squad
//     },
//     removeSquad: async (parent, {squadId}) => {
//         const squad = await squad.findOneAndDelete({
//             _id: squadId
//         })

//         await player.findOneAndUpdate(
//             {_id: playerId},
//             {$pull: {squads: squad}},
//         )

//         await game.findOneAndUpdate(
//             {_id: gameId},
//             {$pull: {squads: squad}},
//         )
//         return squad;
//     },
//   },
// };


// module.exports = resolvers;