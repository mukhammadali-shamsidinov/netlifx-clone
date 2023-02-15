import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <HomeItem>
       <TextGroup>
       <Text>
        Black Adam
        </Text>
        <Time>
        Trending in movies  <br />  Released2022-10-21
        </Time>
        <View>
        Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of jus...
        </View>
       </TextGroup>
       <br />
<ButtonGroup>
<LeftButton>
       <CustomIcon className="fa-solid fa-play" />
       &nbsp;
       <b>Play</b>
       </LeftButton>
       &nbsp;
       <RightButton>
       <CustomIcon className="fa-solid fa-circle-info" />
       &nbsp;<b>More info</b>
       </RightButton>
</ButtonGroup>
       
    </HomeItem>
  )
}

export default Home

const HomeItem = styled.main`
color:white;
width:550px;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:90px;
flex-wrap:wrap;
flex:1;
@media (max-width:768px){
  width:300px;
  margin-left:0;
}
`
const CustomIcon = styled.i`

`
const LeftButton = styled.button`
padding:15px 30px;
border-radius:7px;
background:#D9D9D9;
letter-spacing:2px;
font-size:20px;
cursor:pointer;
transition:all .5s ease;
&:hover{
  border:2px solid #fff;
  color:#fff;
  background:transparent;
}

`

const RightButton = styled(LeftButton)`
background:#696767;
color:#fff;
`
const View = styled.p`
line-height:24px;
`
const Text = styled.h1`
font-size:70px;
@media (max-width:768px){
  font-size:40px;
}
`
const Time = styled.h1`
font-size:30px;
`
const ButtonGroup = styled.div`
`
const TextGroup = styled.div``