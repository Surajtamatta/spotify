import React, { useEffect} from 'react'
import axios from "axios";
import {
    Nav,
    LogoBox,
    Icon,
    HeaderText,
    Text,
    NavMenu,
    MenuList,
    Links,
    LibraryList,
    Playlists,
    Lists,
    Img,
    MdaddToPhotos,
    Name,
    NameText,
    Fahome,
    Fasearch,
    Vsclibrary,
    Fclike,
    PlaylistsWrapper,
    Language,
    GlobeIcon,
    Wrapper,
} from "../../Style/NavbarStyle"
import { useStateProvider } from '../../utils/stateProvider'
import { reducerCases } from '../../utils/Constants';
import { useDummy, usePages, useSearch } from '../../utils/Context';
import addtoplaylist from '../../assets/addtoplaylist.png'

const Navbar = () => {
  const [{token,playlists},dispatch] = useStateProvider();
    useEffect(()=>{
    const getPlaylistData = async ()=>{
        const response = await axios.get("https://api.spotify.com/v1/me/playlists",{
            headers:{
                Authorization:'Bearer ' + token,
                "Content-Type":"appliacation/json"
            },
        });
        const {items} = response.data
       const playlists = items.map(({name,images,id})=>{
        return {
          name,
          images:images[0] ? images[0].url : addtoplaylist,
          id
        }      
       });
       dispatch({type:reducerCases.SET_PLAYLISTS,playlists}) 
    };
    getPlaylistData();
},[token,dispatch]);



const changeCurrentPlaylist = (selectedPlaylistId) => {
  dispatch({ type:reducerCases.SET_PLAYLIST_ID,selectedPlaylistId});
};



const {setShowPages,showPages} =usePages();
const {setDummy} = useDummy();
const {showSearch,setShowSearch}= useSearch();



const handleDummy = () =>{ 
  setDummy({albums:false,artists:false,bollywood:false,tracks:false,playlists:true,songlists:false,});
  setShowPages({home:true,search:false,library:true,playlist:false,like:false})
}

const homeToggle =(items)=>{
 setShowPages({home:true,search:false,library:false,playlist:false,like:false})
 setDummy({albums:true,artists:true,bollywood:true,tracks:true,playlists:false,songlists:false,}) 
}

const SearchToggle =(items)=>{
  setShowPages({home:false,search:true,library:false,playlist:false,like:false})
  setShowSearch(!showSearch);
  }
const libraryToggle =(items)=>{
  setShowPages({library:true, })
  }
const playlistToggle =(items)=>{
  setShowPages({home:false,search:false,library:false,playlist:true,like:false})
}
const likeToggle =(items)=>{
  setShowPages({home:false,search:false,library:false,playlist:false, like:true})
  
}



const footerdata = {row1:['legal','Privarcy center','Privacy Policy'],row2:['Cookies','About Ads','Accessibility']}

  return (
    <Nav>
      <LogoBox><Icon/><HeaderText>Songs</HeaderText></LogoBox>
      <NavMenu>
            <MenuList >
            <Links onClick={()=>{ homeToggle()}}><Fahome/><Name>Home</Name></Links>
            </MenuList>
            <MenuList >
            <Links   onClick={()=>{SearchToggle()}}><Fasearch/><Name>Search</Name></Links>
            </MenuList>
            <LibraryList  >
            <Links   onClick={()=>{libraryToggle()}}><Vsclibrary/><Name>Your Library</Name></Links>
            </LibraryList>
            <MenuList  >
            <Links   onClick={()=>{playlistToggle()}}><MdaddToPhotos/><Name><NameText>Create</NameText>Playlists</Name></Links>
            </MenuList>
            <MenuList >
            <Links   onClick={()=>{likeToggle()}}><Fclike/><Name>Liked Songs</Name></Links>
            </MenuList>
       
      </NavMenu>
   {showPages.library ? 
      <Playlists>{
          playlists.map(({name,images,id})=>{
            return (
              <Lists key={id} onClick={()=>{changeCurrentPlaylist(id);handleDummy();}} ><Img src={images}/><Links>{name}</Links></Lists>
            )
          })}
      </Playlists>
     :
      <PlaylistsWrapper>
         <Wrapper>
         {footerdata.row1.map(data=>{ return (
            <Text>{data}</Text>
          )})}
          </Wrapper>
          <Wrapper>
          {footerdata.row2.map(data=>{ return (
            <Text>{data}</Text>
          )})}
          </Wrapper>
          <Wrapper>
          <Language><GlobeIcon/>Language</Language>
          </Wrapper>
      </PlaylistsWrapper>
    }
    </Nav>
  )
}

export default Navbar;
