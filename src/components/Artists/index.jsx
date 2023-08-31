
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
import ArtistsCard from '../ArtistsCard';
import { useRef } from 'react';
import { useState } from 'react';
import { useDummy } from '../../utils/Context'

const Artists = () => {
    const [{token,artists},dispatch] = useStateProvider();
    useEffect(()=>{
      


    const getTracks = async ()=>{
        const response = await axios.get('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6',
        {
            headers:{
                Authorization:'Bearer ' + token,
                "Content-Type":"appliacation/json"
            },
        });
       
    const {artists} = response.data 
      dispatch({type:reducerCases.SET_ARTISTS,artists})
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
    albums:!dummy.albums,
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
        <Text>Popular Artists</Text>
        <ShowAll  onClick={onClickHandle}   >{limiter===-1 ? 'Close' : 'Show All'}</ShowAll>
      </Categories>
      <SongsContainer ref={cardContainer}>
      {
      artists?.map((content)=>{
          return <ArtistsCard key={content.id} content={content}/>
        }).slice(0,limiter)

      }
      </SongsContainer>
      </Wrapper>
  )
}

export default Artists
