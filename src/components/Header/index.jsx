import React, { useEffect} from 'react'

import {
  HeaderContainer,
  Navigation,
  NavIcon,
  Left,
  Right,
  SearchInput,
  SearchBox,
  SearchIcon,
  LogoBox,
  Icon,
  Text,
  Registration,
  SignUp,
  VerticalLine,
  Login
} from "../../Style/HeaderStyle"
import {useNavigate} from "react-router-dom"
import SpotifywebApi from"spotify-web-api-node";
import { useSearch, useSearchResult, useSearchValue } from '../../utils/Context'
import { useStateProvider } from '../../utils/stateProvider';




const spotifyApi= new SpotifywebApi({
  clientId:"76397f08f5bf42c5a152f1c04d79a4c9"
})

const Header = (props) => {
const navigate=useNavigate();
const NavigateLogin=(url)=>{
   return navigate(url);
}


const {showSearch} = useSearch();
const {searchValue,setSearchValue}= useSearchValue();
const {setSearchResult} = useSearchResult();
const [{token}] = useStateProvider();
useEffect(()=>{
  if(!token) return
  spotifyApi.setAccessToken(token)
},[token])

useEffect(()=>{
  if(!searchValue) return setSearchResult([])
  if(!token) return
  spotifyApi.searchTracks(searchValue).then(response=>{
    setSearchResult(response.body.tracks.items.map(track=>{
      return({
        id: track.album.id,
        name: track.name,
        artistName: track.artists?.[0].name || 'Unknown',
        context_uri: track.uri,
        images: track.album.images
      })
    }))
  
  })
  
},[searchValue,setSearchResult,token])



  return (
    <HeaderContainer>
      {props.back ? <LogoBox>
                    <Icon/>
                    <Text>Songs</Text>
                    </LogoBox> 
                    :<Navigation>
                      <NavIcon>
                      <Left onClick={() => navigate(-1)}/>
                      <Right onClick={() => navigate(1)}/>
                      </NavIcon>
                     { showSearch && 
                      <SearchBox>
                        <SearchInput
                        value={searchValue}
                        onChange={e=>setSearchValue(e.target.value)}
                        />
                        <SearchIcon/>
                      </SearchBox>
                      }
                    </Navigation>
                    
      }
     
      <Registration showsearch={showSearch}>
        <SignUp showsearch={showSearch}>Sign Up</SignUp>
        <VerticalLine showsearch={showSearch}/>
        <Login onClick={(()=>NavigateLogin('./Login'))}>{props.back ? 'Back' :'Login'}</Login>
      </Registration>
    </HeaderContainer>
  )
}

export default Header
