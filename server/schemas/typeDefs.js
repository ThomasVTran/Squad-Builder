const typeDefs = `
type Player {
    _id: ID
    username: String
    email: String
    password: String
    friends: [Player]
    squads: [Squad]!
    
}

type Squad {
    _id: ID
    squadName: String
    playerCount: Int
    ranked: Boolean
    createdAt: String
    playStyle: String
    players: [Player]!
}

type Game{
    _id: ID
    name: String
    image: String
    platforms: String
    rating: Int
    review: String
    squads: [Squad]!
}

type Auth{
    token: ID!
    Player: Player
}

type Query {
    player(username: String!): Player
    games: [Game]
    game(gameId: ID!): Game
    squads(username: String!, gameId: ID): [Squad]
    squad(squadId: ID!): Squad
    me: Player
}

type Mutation {
    addPlayer(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removePlayer(playerId: ID!): Auth
    addFriend(playerId: ID!, username: String!): Player
    removeFriend(playerId: ID!): Player
    addGame(name: String!, image: String!, platforms: String, rating: Int, review: String): Game
    addSquad(squadName: String!, playerCount: Int, ranked: Boolean, playStyle: [String]): Squad
    removeSquad(squadId: ID!): Squad
}

`

module.exports = typeDefs;