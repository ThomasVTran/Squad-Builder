import { gql } from '@apollo/client';

export const QUERY_PLAYER = gql`
query Player($username: String!) {
  player(username: $username) {
    _id
    username
    friends {
      username
    }
    squads {
      squadName
      playerCount
    }
  }
}
`;

export const QUERY_SQUADS = gql`
query Squads {
  squads {
    squadName
    playerCount
  }
}
`;

export const QUERY_SQUAD = gql`
query Squad($squadId: ID!) {
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
}
`;

export const QUERY_ME = gql`
query me {
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
    ranked
    createdAt
    playStyle
    players {
      username
    }
    gameFor
    createdBy
  }
  }
}
`;

export const QUERY_GAMES = gql`
query games {
    _id
    name
    image
    description
  }
`;

export const QUERY_GAME = gql`
query Game($gameId: ID!) {
  game(gameId: $gameId) {
    name
    image
    squads {
      squadName
      playerCount
      createdBy
    }
  }
}
`;

export const QUERY_FRIENDS = gql`
query Friends($username: String!) {
  player(username: $username) {
    friends {
      username
    }
  }
}
`;