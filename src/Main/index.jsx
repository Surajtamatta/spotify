import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Navbar';
import { Container,Wrapper } from '../Style/MainStyle';
import { usePlayer } from '../utils/Context';
import CurrentPlayer from '../components/SongPlayer'
const Main = () => {
  const {showPlayer} = usePlayer();
  return (
    <Container>
    <Wrapper   showPlayer={showPlayer}>
        <Navbar/>
        <Home/>
    </Wrapper>
   {
    showPlayer && <CurrentPlayer/>
   }
       
    </Container>
  )
}

export default Main
