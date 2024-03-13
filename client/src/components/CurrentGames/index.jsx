import { useQuery } from '@apollo/client';
import { QUERY_GAMES } from "../../utils/queries"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Styles from './index.css'



export default function CurrentGames() {
    const {loading, data} = useQuery(QUERY_GAMES)
    const games = data?.games || [];

    console.log(games);

    if(loading){
      return <span>Loading</span>
    } else{

    return (
        <>
        <section className='d-flex flex-row justify-content-center'>
        {games.map((data)=>(           
        <Card className='gameCards' key={data} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Link to={`./game/${data._id}`}>
            <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
        ))}
        </section>
        </>
      );
  }
}