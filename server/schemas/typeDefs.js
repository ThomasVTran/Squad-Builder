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

    }

    type auth{
        token: ID!
        Player: player
    }

    type Query {
        players: [player]
        player(username: String!): player
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
        addSquad(squadText: String!): squad
        addComment(squadId: ID!, commentText: String!): squad
        removeSquad(squadId: ID!): squad
        removeComment(squadId: ID!, commentId: ID!): squad
    }
`