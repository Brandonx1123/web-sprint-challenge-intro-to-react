// Write your Character component here

import React, {useEffect} from 'react'
import styled, {keyframes} from 'styled-components';

// const innercardDiv = styled.div `
// width:100%auto;
// `


const CardBox = styled.div`

display:flex;
flex-wrap: wrap;
justify-content:center;
flex-direction:row;
width:100%;

img{
    width:25%;
    height: 8vh;
    border: 2px solid black;
    
}

h2{
    text-decoration: underline;
}

p{
    text-align:center;
    font-size: .9rem;
    /* background: white; */
    width: 10;
    font-weight:bold;
}

.CardDiv {

width: 30%;
border: 1px solid black;
margin: 1% auto;
background:wheat;
box-shadow: 0px 1px 40px -2px mediumpurple;
}

`

// const innercardDiv = styled.div`
// border: 10px solid white;
// width:10%;  
// `


function CharacterCard (props) {

    const {characters, characterObj } = props;
    return (
      <CardBox>
      {characters.map(characterObj => {
        return <innercardDiv className ='CardDiv' >
        <img src={characterObj.image} alt={characterObj.name} /> 
        <h2>{characterObj.name}</h2>
        <p>{characterObj.gender}</p>
        <p>{characterObj.origin.name}</p>
        <p>{characterObj.status}</p>
        <button onClick={characterObj.results}> Learn More </button>
      </innercardDiv>
        
      })}
      </CardBox>
    )
  }
  

export default CharacterCard;