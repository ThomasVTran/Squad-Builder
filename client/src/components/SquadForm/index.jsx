import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SQUAD } from '../../utils/mutations';
import { QUERY_SQUADS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SquadForm = () => {
  const [squadName, setSquadName] = useState('');
  const [gameId, setGameId] = useState('');
  const [playerCount, setPlayerCount] = useState('');
  const [ranked, setRanked] = useState(false);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSquad({
        variables: {
          squadName,
          createdBy: Auth.getPlayer().data.username,
          gameId,
          playerCount: parseInt(playerCount),
          ranked,
          playStyle
        },
      });

      setPlayStyle('');
      setRanked('');
      setPlayerCount('');
      setSquadName('');
      setGameId('');
    } catch (err) {
      console.error(err);
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'squadName' && value.length <= 28) {
      setSquadName(value);
      setCharacterCount(value.length);
    }
    if (name === 'gameId' && value.length <= 28) {
      setGameId(value);
      setCharacterCount(value.length);
    }
    if (name === 'playerCount' && value.length <= 9) {
      setPlayerCount(value);
      setCharacterCount(value.length);
    }
    if (name === 'playStyle' && value.length <= 28) {
      setPlayStyle(value);
      setCharacterCount(value.length);
    }
    if (name === 'ranked' && event.target.checked) {
      setRanked(true);
    }
  };

  return (
    <div>
      <h3>{Auth.getPlayer().data.username}</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="squadName"
                placeholder="New squad..."
                value={squadName}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/28
              </p>

              <br />

              <textarea
                name="gameId"
                placeholder="Which game is this for?"
                value={gameId}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/28
              </p>
              <br />

              <textarea
                name="playerCount"
                placeholder="Number of players in your squad"
                value={playerCount}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              <p
                className={`m-0 ${characterCount === 8 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/8
              </p>
              <br />

              <textarea
                name="playStyle"
                placeholder="How would you like your squad to play?"
                value={playStyle}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/28
              </p>
              <br />

              <label>
                <div>
                  Ranked
                </div>
                <input
                  name="ranked"
                  type="checkbox"
                  className="form-input w-100"
                  style={{ lineHeight: '1.5' }}
                  value={ranked}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Create Squad
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create your squads. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SquadForm;
