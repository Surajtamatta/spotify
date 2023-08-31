import React, { useEffect} from 'react'
import {
  SongsContainer,
  PlayListWrapper,
  Browser,
  Header,
  Template,
  Genre,

} from "../../Style/SearchStyle"
import Footer from '../../components/Footer'
import { useSearchResult, useSearchValue } from '../../utils/Context'
import SongsCards from '../../components/SongsCards';
import axios from "axios";
import { useStateProvider } from '../../utils/stateProvider';
import { reducerCases } from '../../utils/Constants';



const Search = () => {
const {searchResult} = useSearchResult()


const {setSearchValue} = useSearchValue();


const [{token,genres},dispatch] = useStateProvider();
useEffect(()=>{
const getGenres = async ()=>{
    const response = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{
        headers:{
            Authorization:'Bearer ' + token,
            "Content-Type":"appliacation/json",
           
        },
    });
   const {genres} = response.data
   
  dispatch({type:reducerCases.SET_GENRES,genres})
};
getGenres();
},[token,dispatch]);

  return (
    <PlayListWrapper>
      { searchResult.length ===0 ? 


          <>
          <Header>Browse All</Header>
          <Browser>
            {
              Object.values(genres).map((genres,index)=>{
                let hexColor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
                let textColor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
                return(
                  <Template key={index} backgroundColor={hexColor}  onClick={()=>setSearchValue(genres)}>
                    <Genre textColor={textColor}>{genres}</Genre>
                  </Template>
                )
              })
            } 
          </Browser>
          </>
      :
          
          <SongsContainer>
          {
            searchResult?.map((content)=>{
              return < SongsCards key={content.id} content={content}  />
            })
            
          }
          </SongsContainer>
      
      
      }
      <Footer/> 
     </PlayListWrapper>

  )
}

export default Search
