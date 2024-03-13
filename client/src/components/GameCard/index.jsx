import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useQuery } from "@apollo/client";
import { QUERY_GAME } from "../../utils/queries";

export default function GameCard() {
  const { _id: gameParam } = useParams();
  const { loading, data, error } = useQuery(QUERY_GAME, {
    variables: { gameId: gameParam },
  });

  if (error) {
    console.log(error);
  } else if (loading) {
    return <span>Loading...</span>;
  } else {
    console.log(data);

    return (
      <section className="d-flex justify-content-center">
        <Accordion className="col-6 d-flex-row" defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img src={data.game.image} />
              <p>Game name/image go here.</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{data.game.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    );
  }
}
