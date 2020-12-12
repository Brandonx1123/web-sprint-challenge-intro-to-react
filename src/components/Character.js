// Write your Character component here

import React from 'react'
import styled, {keyframes} from 'styled-components';

const innercardDiv = styled.div `
width:100%auto;
`


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
      </innercardDiv>
        
      })}
      </CardBox>
    )
  }
  

export default CharacterCard;