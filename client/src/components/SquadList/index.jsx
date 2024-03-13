import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {SQUAD_PLUS} from '../../utils/mutations';
import {QUERY_SQUADS} from '../../utils/queries';

const SquadList = ({}) => {
  
  const { loading, data, error} = useQuery(QUERY_SQUADS);

  if (error) {
    console.log(error);
  }

  const gameSquads = data?.squads || [];

  
  if (!gameSquads) {
    return <h3>No Squads Yet</h3>;
  } else {
    
    console.log(gameSquads);
  return (
    <>
    {
      gameSquads.map((squad)=> {
        <section>
          
        </section>
      })
    }
    </>
  );
  }
};

export default SquadList;

{/* <div>
{showSquadName && <h3>{squadName}</h3>}
{squads &&
  Squads.map((squad) => (
    <div key={squad._id} className="card mb-3">
      <h4 className="card-header bg-primary text-light p-2 m-0">
        {showSquads ? (
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
        <p>{squad.squadName}</p>
      </div>
      <Link
        className="btn btn-primary btn-block btn-squared"
        to={`/squads/${squad._id}`}
      >
        Join the discussion on this squad.
      </Link>
    </div>
  ))}
</div> */}