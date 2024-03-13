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
    _id
    squadName
    playerCount
    description
    playStyle
    ranked
    players {
      _id
      username
    }
    createdBy
    createdAt
  }
}
`;

export const QUERY_SQUAD = gql`
query Squad($squadId: ID!) {
  squad(squadId: $squadId) {
    _id
    squadName
    playerCount
    description
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
query Games {
  games {
    _id
    name
    image
  }
}
`;

export const QUERY_GAME = gql`
query Game($gameId: ID!) {
  game(gameId: $gameId) {
    _id
    name
    image
    description
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