import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SQUAD } from '../../utils/mutations';
import { QUERY_SQUADS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const GameSquad = () => {
    const [squadName, setSquadName] = useState('');
    const [gameId, setGameId] = useState('');
    const [playerCount, setPlayerCount] = useState('');
    const [ranked, setRanked] = useState('');
    const [playStyle, setPlayStyle] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addSquad, { error }] = useMutation(ADD_SQUAD, {
        refetchQueries: [
          QUERY_SQUADS,
          'getSquads',
          QUERY_ME,
          'me'
        ]
      });
}