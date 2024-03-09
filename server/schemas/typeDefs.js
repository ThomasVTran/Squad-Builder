const typeDefs = `
    type player{
        _id: ID
        username: String
        email: String
        password: String
        squads: [squad]!
        friends: [player]!
    }

    type squad{
        _id: ID
        squadName: String
        playerCount: Number
        ranked: Boolean
        time: Date
        playStyle: [String]!
        players: [player]!
    }

    type game{
        _id: ID
        name: String
        image: String
        platforms: String
        rating: Number
        review: String
        squads: [squad]!
    }

    type auth{
        token: ID!
        Player: player
    }

    type Query {
        players: [player]
        player(username: String!): player
        games:[game]
        game(name: String!): game
        squads(username: String!): [squad]
        squad(squadId: ID!): squad
        me: player
    }

    type Mutation {
        addPlayer(username: String!, email: String!, password: String!): auth
        removePlayer(playerId: ID!): auth
        login(email: String!, password: String!): auth
        addFriend(playerId: ID!, username):player
        removeFriend(playerId: ID!): player
        addGame(name: String!): game
        removeGame(gameId: ID!): game
        addSquad(name: String!): squad
        removeSquad(squadId: ID!): squad
    }
`