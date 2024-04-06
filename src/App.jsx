import { useState } from 'react';
import './App.css'

import Home from './components/Home/Home';

import songs from './data/data';

function App() {
  const [queryInput, setQueryInput] = useState('')

  const handleQueryChange = (e) => {
    const query = e.target.value;
    setQueryInput(query)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(queryInput);
    alert('test is good!')
    setQueryInput('')
  }

  return (
    <>
      <Home 
      handleSubmit={handleSubmit}
      handleChange={handleQueryChange} 
      queryValue={queryInput} 
      data={songs}
      />
    </>
  )
}

export default App
