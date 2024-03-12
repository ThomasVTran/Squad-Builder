import { gql } from '@apollo/client';

export const ADD_PLAYER = gql`
mutation AddPlayer($username: String!, $email: String!, $password: String!) {
    addPlayer(username: $username, email: $email, password: $password) {
      token
      Player {
        _id
        username
      }
    }
  }
`
export const LOGIN_PLAYER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      Player {
        _id
        username
      }
    }
  }
`

export const REMOVE_PLAYER = gql`
mutation RemovePlayer($playerId: ID!) {
    removePlayer(playerId: $playerId) {
      token
      Player {
        _id
      }
    }
  }
`

export const ADD_FRIEND = gql`
mutation AddFriend($playerId: ID!, $friendId: ID!) {
    addFriend(playerId: $playerId, friendId: $friendId) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`

export const REMOVE_FRIEND = gql`
mutation RemoveFriend($playerId: ID!, $friendId: ID!) {
    removeFriend(playerId: $playerId, friendId: $friendId) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`

export const ADD_GAME = gql`
mutation AddGame($name: String, $image: String, $description: String) {
  addGame(name: $name, image: $image, description: $description) {
    _id
    name
    image
    description
  }
}
`

export const REMOVE_GAME = gql`
mutation RemoveGame($gameId: ID) {
  removeGame(gameId: $gameId) {
    _id
  }
}
`

export const ADD_SQUAD = gql`
mutation AddSquad($playerId: ID!, $gameId: ID!, $squadName: String!, $playerCount: Int!, $ranked: Boolean!, $playStyle: [String]!) {
    addSquad(playerId: $playerId, gameId: $gameId, squadName: $squadName, playerCount: $playerCount, ranked: $ranked, playStyle: $playStyle) {
      _id
      squadName
      playerCount
      players {
        _id
        username
      }
      ranked
      playStyle
    }
  }
`

export const REMOVE_SQUAD = gql`
mutation RemoveSquad($squadId: ID!, $playerId: ID!, $gameId: ID!) {
    removeSquad(squadId: $squadId, playerId: $playerId, gameId: $gameId) {
      _id
    }
  }
`

export const SQUAD_PLUS = gql`
mutation SquadPlus($squadId: ID!, $playerId: ID!) {
    squadPlus(squadId: $squadId, playerId: $playerId) {
      _id
      squadName
      createdBy
      playerCount
      players {
        _id
        username
      }
      ranked
      playStyle
    }
  }
`
export const SQUAD_MINUS = gql`
mutation SquadMinus($squadId: ID!, $playerId: ID!) {
    squadMinus(squadId: $squadId, playerId: $playerId) {
      _id
      squadName
      playerCount
      players {
        _id
        username
      }
    }
  }
`