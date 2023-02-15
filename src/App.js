
import './App.css';
import Videos from './components/Videos';
import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  const [change] = useState('/images/home.png')
  return (
    <div className="app">
      <Container bg={change}>
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
      </Container>


      {/* Videos */}
      <Videos />
    </div>
  );
}

export default App;

const Container = styled.div`
background-image:url("${props=>props.bg}");
width:100%;
height:100vh;
background-size:cover;
background-position:center

`
