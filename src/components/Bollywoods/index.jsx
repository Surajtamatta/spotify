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
import SongsCards from '../../components/SongsCards';
import { useRef } from 'react';
import { useState } from 'react';
import { useDummy } from '../../utils/Context'



const Bollywood = () => {
    
    const [{token,new_releases},dispatch] = useStateProvider();
    useEffect(()=>{
    const getReleaseData = async ()=>{
        const response = await axios.get("https://api.spotify.com/v1/browse/new-releases",{
            headers:{
                Authorization:'Bearer ' + token,
                "Content-Type":"appliacation/json",
               
            },
        });
       const {items} = response.data.albums
      const new_releases = items.map(({id,name,images,artists})=>{
        return {id,name,images,artists}
      })   
      dispatch({type:reducerCases.SET_NEW_RELEASES,new_releases})
    };
    
    getReleaseData();
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
    albums:!dummy.albums,
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
        <Text>Bollywood</Text>
        <ShowAll onClick={onClickHandle}   click={limiter}>{limiter===-1 ? 'Close' : 'Show All'}</ShowAll>
      </Categories>
      <SongsContainer ref={cardContainer}>
      {
        new_releases?.map((content)=>{

          return <SongsCards key={content.id} content={content} />
        }).slice(0,limiter)
        
      }  
      </SongsContainer>
      </Wrapper> 
  )
}

export default Bollywood
