import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SQUAD } from '../../utils/mutations';
import { QUERY_SQUADS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SquadForm = () => {
  const [squadName, setSquadName] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addSquad, { error }] = useMutation (ADD_SQUAD, {
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
          createdBy: Auth.getProfile().data.username,
        },
      });

      setSquadName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'squadText' && value.length <= 28) {
      setSquadName(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>{Auth.getPlayer().data.username}</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/28
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="squadName"
                placeholder="Here's a new squad..."
                value={squadName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
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
