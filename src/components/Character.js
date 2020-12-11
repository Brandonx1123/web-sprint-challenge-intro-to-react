// Write your Character component here

import React from 'react'
import styled, {keyframes} from 'styled-components';


const CardBox = styled.div`

display:flex;
flex-wrap: nowrap;
justify-content:center;
flex-direction:column;
width:100%;

img{
    width:10%;
    
}

`

const innercardDiv = styled.div`
border: 10px solid black;
width:50%;
`


function CharacterCard (props) {

    const {characters, characterObj } = props;
    return (
      <CardBox>
      {characters.map(characterObj => {
        return <innercardDiv>
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