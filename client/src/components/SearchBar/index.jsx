import Form from 'react-bootstrap/Form';

function SearchBar() {
    return (
      <>
        <Form.Label htmlFor="inputGame">Search For A Game!</Form.Label>
        <Form.Control
          type="game"
        />
      </>
    );
  }
  
  export default SearchBar;