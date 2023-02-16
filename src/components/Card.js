import React from 'react'
import styled from 'styled-components'
const Card = () => {
  return (
    <ImageContainer>
        <Image src="/images/card.jpg" alt="card" />
    </ImageContainer>
  )
}


export default Card

const ImageContainer = styled.div`
margin:10px;
`
const Image = styled.img`
width:300px;
height:150px;
transition:all .5s ease;
cursor:pointer;
`