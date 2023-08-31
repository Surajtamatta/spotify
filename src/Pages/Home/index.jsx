import React, { useEffect, useState } from 'react'
import AllSongList from '../../components/AllSongList';
import Header from '../../components/Header';
import {
  HomeContainer,
} from "../../Style/HomeStyle"

import AllPlaylist from '../../views/AllPlaylist';
import Search from '../../views/Search';
import Likes from '../../views/Likes'
import { usePages } from '../../utils/Context';

const Home = () => {


const {...showPages} = usePages()
 
  return (
    <HomeContainer>
    <Header/>
    {showPages.home && <AllSongList/>}
    {showPages.search && <Search/>}
    {showPages.playlist && <AllPlaylist/>}
    {showPages.like && <Likes/>}
    </HomeContainer>
  )
}

export default Home
