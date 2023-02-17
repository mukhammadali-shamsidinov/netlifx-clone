import React from 'react'
import styled from 'styled-components'
const Card = () => {
  return (
    <CardContainer>
        <Image src="https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg?w=730&crop=1" alt="card-imgs"/>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
width:300px;
height:150px;
`

const Image = styled.img`
width:100%;
height:100%;
objective-fit:cover;
`