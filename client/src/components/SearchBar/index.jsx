import Form from 'react-bootstrap/Form';
import gameSearch from '../../utils/rawg'
import { useState } from 'react';
import GameCards from '../GameCards/index'
function SearchBar() {

const [results, setResults] = useState([])
const [search, setSearch] = useState('')

  const searchRawg = async (query)=> {
    const response = await gameSearch(query)
    const data = await response.json()

    setResults(data.results)
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    
    if(name===`game`){
      setSearch(value)
    }

  }

  const handleSubmit = (event)=> {
    event.preventDefault()

    searchRawg(search)
    }


  console.log(results);
    return (
      <>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputGame">Search For A Game!</Form.Label>
        <Form.Control
          type="text"
          name='game'
          onChange={handleChange}
          value={search}          
        />
      </Form>
      <GameCards results={results}/>
      </>
    );
  }
  
  export default SearchBar;