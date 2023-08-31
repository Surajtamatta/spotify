
import React, { useEffect } from 'react'
import axios from 'axios'
import { reducerCases } from '../../utils/Constants'
import { useStateProvider } from '../../utils/stateProvider'
import {
  Wrapper,
  SongsContainer,
  Categories,
  Text,
  ShowAll,
} from "../../Style/HomeStyle"
import SongsCards from '../SongsCards';
import { useRef } from 'react';
import { useState } from 'react';
import { useDummy } from '../../utils/Context'

const Tracks = () => {
    const [{token,tracks},dispatch] = useStateProvider();


  useEffect(()=>{
    const getTracks = async ()=>{
        const response = await axios.get('https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B' ,{
            headers:{
                Authorization:'Bearer ' + token,
                "Content-Type":"appliacation/json"
            },
        });
        const data = response.data.tracks
        
     const tracks = data.map((items)=>{
        return items.album
      })
      dispatch({type:reducerCases.SET_TRACKS,tracks})
    };
    getTracks();
},[token,dispatch]);

const [limiter,setLimiter] = useState(0)
const cardContainer = useRef()

const [prevlimiter, setPrevlimiter] = useState(0)
const ShowAllhandle = ()=>{
  if(limiter === -1){
   return setLimiter(prevlimiter)
  }
  return (setLimiter(-1))
}
useEffect(()=>{
  const handleWindowresizer=()=>{
    const calculation = Math.floor(cardContainer.current.clientWidth / 160)
    setLimiter(calculation)
    setPrevlimiter(calculation)

  }
  handleWindowresizer()
  window.addEventListener('resize',handleWindowresizer)
  return ()=> window.removeEventListener('resize',handleWindowresizer)
},[])



const {setDummy,...dummy} = useDummy()
const handleDummy = () =>{ 
   setDummy({
    ...dummy,
    artists:!dummy.artists,
    bollywood:!dummy.bollywood,
    albums:!dummy.albums
   }) 
}
const onClickHandle=()=>{
  ShowAllhandle();
 handleDummy()
}


  return (
    <Wrapper>
      <Categories>
        <Text>Popular Tracks</Text>
        <ShowAll onClick={onClickHandle} >{limiter===-1 ? 'Close' : 'Show All'}</ShowAll>
      </Categories>
      <SongsContainer ref={cardContainer}>
      {
        tracks?.map((content)=>{
          return (
      
          <SongsCards key={content.id} content={content}/>
        
          )

        }).slice(0,limiter)
      }
      
      </SongsContainer>
      </Wrapper>
  )
}

export default Tracks
