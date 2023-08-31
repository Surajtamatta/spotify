
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
const Albums = () => {
    const [{token,albums},dispatch] = useStateProvider();
    useEffect(()=>{
      
    const getTracks = async ()=>{
        const response = await axios.get('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums',{
            headers:{
                Authorization:'Bearer ' + token,
                "Content-Type":"appliacation/json"
            },
        });
       
    const {items} = response.data
       const albums = items.map(({id,name,images,artists})=>{
        return {id,name,images,artists}
      }) 
      dispatch({type:reducerCases.SET_ALBUMS,albums})
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
    tracks:!dummy.tracks
   }) 
}
const onClickHandle=()=>{
  ShowAllhandle();
 handleDummy()
}


  return (
    <Wrapper>
      <Categories>
        <Text>Popular Albums</Text>
        <ShowAll onClick={onClickHandle} >{limiter===-1 ? 'Close' : 'Show All'}</ShowAll>
      </Categories>
      <SongsContainer ref={cardContainer}>
      {
        albums?.map((content)=>{

          return <SongsCards key={content.id} content={content}/>
        }).slice(0,limiter)
        
      }
      </SongsContainer>
      </Wrapper>
  )
}

export default Albums
