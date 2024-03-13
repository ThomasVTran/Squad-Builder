import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { ADD_SQUAD, SQUAD_PLUS } from '../../utils/mutations';
import { QUERY_SQUADS, QUERY_ME, QUERY_GAME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SquadForm = () => {
  const [squadName, setSquadName] = useState('');
  const [gameId, setGameId] = useState('');
  const [playerCount, setPlayerCount] = useState('');
  const [ranked, setRanked] = useState(false);
  const [playStyle, setPlayStyle] = useState([]);
  const [description, setDescription] = useState('')
  const [characterCount, setCharacterCount] = useState(0);

  const { _id: gameParam } = useParams();
  const { loading, data} = useQuery(QUERY_GAME, {
    variables: { gameId: gameParam },
  });

 

  const [addSquad, { error }] = useMutation(ADD_SQUAD, {
    refetchQueries: [
      QUERY_SQUADS,
      'getSquads',
      QUERY_ME,
      'me'
    ]
  });

  const [squadPlus, { err }] = useMutation(SQUAD_PLUS , {
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
      console.log(Auth.getPlayer().data.username);
      const {data} = await addSquad({
        variables: {
          playerId: Auth.getPlayer().data._id,
          gameId,
          squadName,
          createdBy: Auth.getPlayer().data.username,
          playerCount,
          description,
          ranked,
          playStyle
        },
      });

      console.log(data);

      const firstPlayer = await squadPlus({
        variables: {
          squadId: data.addSquad._id,
          playerId: Auth.getPlayer().data._id
        }
      })

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
    if (data.game._id) {
      setGameId(data.game._id);
      setCharacterCount(value.length);
    }
    if (name === 'playerCount' && value.length <= 9) {
      setPlayerCount(parseInt(value));
      setCharacterCount(value.length);
    }
    if (name === 'description') {
      setDescription(value);
      setCharacterCount(value.length);
    }
    if (name === 'playStyle') {
      setPlayStyle([value]);
      setCharacterCount(value.length);
    }
    if (name === 'ranked' && checkbox.checked != true) {
      setRanked(value);
    }
  };

  const styleTags = ["Competitive", "Casual", "Mic", "No Mic", "Weekends", "Weekdays", "For Fun", "For Content", "For Laughs", "Roleplay"]

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
              {/* <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/28
              </p> */}

              <br />

              {/* <textarea
                name="gameId"
                placeholder="Which game is this for?"
                value={gameId}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea> */}
              {/* <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/28
              </p>
              <br /> */}

              <textarea
                name="playerCount"
                placeholder="Number of players in your squad"
                value={playerCount}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              {/* <p
                className={`m-0 ${characterCount === 8 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/8
              </p> */}
              <br />
              

              <textarea
                name="description"
                placeholder="How would you like your squad to play?"
                value={description}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
              {/* <p
                className={`m-0 ${characterCount === 28 || error ? 'text-danger' : ''
              }`}
              >
              Character Count: {characterCount}/28
              </p>
            <br /> */}

            <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Play Style Tags
    </Dropdown.Toggle>
    <Dropdown.Menu>
    {styleTags.map((tags)=> (
      <label key={tags}>
        <text>
          {tags}
        </text>
        <input
          name="playStyle"
          type="checkbox"
          className="form-input w-100"
          style={{ lineHeight: '1.5' }}
          value={tags}
          onChange={handleChange}
        />
        </label>
      ))}
    </Dropdown.Menu>
  </Dropdown>

              <label>
                <text>
                  Ranked
                </text>
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
                Add Squad
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
