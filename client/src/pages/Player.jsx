import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SquadForm from '../components/SquadForm';
import SquadList from '../components/SquadList';
import FriendsList from '../components/FriendsList';

import Auth from '../utils/auth';

import { QUERY_PLAYER, QUERY_ME } from '../utils/queries';

export default function Player() {

    const { username: playerParam } = useParams();

  const { loading, data, error } = useQuery(playerParam ? QUERY_PLAYER : QUERY_ME, {
    variables: { username: playerParam },
  });
  if (error) {
    console.log(error);
  }
  const player = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getPlayer().data.username === playerParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!player?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
         {playerParam ? `${Player.username}'s` : 'Player'} Profile
        </h2>

        <div className="col-12 col-md-10 mb-5">
            <FriendsList
            username={Player.username}
            />
        </div>

        <div className="col-12 col-md-10 mb-5">
          <SquadList
            squads={Player.squads}
            title={`${Player.username}'s squads...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

        {!playerParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <SquadForm />
          </div>
        )}
      </div>
    </div>
  );
}