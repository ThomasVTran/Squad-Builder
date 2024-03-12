import Accordion from 'react-bootstrap/Accordion';

export default function GameCard() {
  return (
    <section className='d-flex justify-content-center'>
    <Accordion className='col-6 d-flex-row' defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <img />
            <p>Game name/image go here.</p>
        </Accordion.Header>
        <Accordion.Body>
          This is where the game description lives. 
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
          This is where the game description lives.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  );
}

