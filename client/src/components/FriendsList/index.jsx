import { Link } from 'react-router-dom';

const FriendsList = ({
  player,
  showPlayer = true,
}) => {
  if (!player) {
    return <h3>No Friends Yet</h3>;
  }

  return (
    <div>
      {showPlayer && <h3>{player.username}</h3>}
      {player &&
        player.map((player) => (
          <div key={player._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
                <Link
                  className="text-light"
                  to={`/profiles/${player.username}`}
                >
                  {player.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this squad on {player.createdAt}
                  </span>
                </Link>
            </h4>
          </div>
        ))}
    </div>
  );
};

export default FriendsList;
