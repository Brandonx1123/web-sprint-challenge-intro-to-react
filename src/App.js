import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'

const AppDiv = styled.div `
display:flex;
flex-wrap:nowrap;
flex-direction: column;
align-items:center;

.Header{
  text-decoration: underline;
  font-weight:bold;
  font-size: 2.7rem;
}
`

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters (res.data.results)
      })
    

  }, []); 

// .catch(err =>{
      //   console.log('error message',err)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppDiv className="App">
      <h1 className="Header">Rick and Morty</h1>
      <Character characters={characters} />
    </AppDiv>
  );
}

export default App;
