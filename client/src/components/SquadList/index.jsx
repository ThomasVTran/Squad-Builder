import { Link } from 'react-router-dom';

const SquadList = ({
  squads,
  squadName,
  showSquadName = true,
  showUsername = true,
}) => {
  if (!squads.length) {
    return <h3>No Squads Yet</h3>;
  }

  return (
    <div>
      {showSquadName && <h3>{squadName}</h3>}
      {squads &&
        squads.map((squad) => (
          <div key={squad._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${squad.squadName}`}
                >
                  {squad.squadName} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this squad on {squad.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this squad on {squad.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{squad.squadText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/squads/${squad._id}`}
            >
              Join the discussion on this squad.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SquadList;
