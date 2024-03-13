import Form from 'react-bootstrap/Form';
import gameSearch from '../../utils/rawg'
import { useState } from 'react';
import GameCards from '../GameCards/index'
import Styles from './index.css'

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
      <section className='searchContainer d-flex flex-column align-items-end flex-wrap'>
      <Form className='searchBar' onSubmit={handleSubmit}>
        <Form.Control
        placeholder='Search For A Game!'
          type="text"
          name='game'
          onChange={handleChange}
          value={search}          
        />
      </Form>
      <div className='d-flex flex-row'>
      <GameCards results={results}/>
      </div>
      </section>
    );
  }
  
  export default SearchBar;