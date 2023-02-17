import React from 'react'
import Card from './Card'
import styled from 'styled-components'
const Products = () => {
  return (
    <Container>
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        
    </Container>
  )
}

export default Products

const Container = styled.div`
display:flex;
justify-content:space-evenly;
width:90%;
margin:30px auto;
flex-wrap:wrap;
gap:10px;

@media (max-width:768px){
    width:100%;
}
`