import { gql } from '@apollo/client';

export const QUERY_PLAYER = gql`
player(username: $username) {
    _id
    username
    friends {
      username
    }
    squads {
      squadName
      gameFor
      players {
        username
      }
    }
  }
`;

export const QUERY_SQUAD = gql`
squad(squadId: $squadId) {
    _id
    squadName
    playerCount
    ranked
    createdAt
    playStyle
    players {
      username
    }
    gameFor
    createdBy
  }
`;


export const QUERY_ME = gql`
me {
    username
    email
    friends {
      username
    }
    squads {
      _id
      squadName
      playerCount
      players {
        username
      }
      gameFor
      createdAt
    }
  }
`;

export const QUERY_GAMES = gql`
games {
    _id
    name
    image
    description
  }
`;

export const QUERY_GAME = gql`
game(gameId: $gameId) {
    _id
    name
    squads {
      squadName
      playerCount
      ranked
      createdAt
      playStyle
      players {
        username
      }
      createdBy
    }
  }
`;