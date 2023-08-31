import React,{useEffect,useReducer} from 'react'
import axios from "axios";
import {
PlaylistContainer,
Wrapper,
Links,
Playlists,
Lists,
Img,
CloseButton,
Addicon,
} from "../../Style/ShowPlaylistStyle"
import { useStateProvider } from '../../utils/stateProvider'
import { reducerCases } from '../../utils/Constants';
import addtoplaylist from '../../assets/addtoplaylist.png'

const Playlist = ({closePlaylist,content}) => {
const [{token,playlists},dispatch] = useStateProvider();
const [reducerValue , forceUpdate] = useReducer(x=>x+1,0)








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
  
},[token,dispatch,reducerValue]);




const createPlaylistAndAddSong = async ()=> {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  try {
    const playlistResponse = await axios.post(
      'https://api.spotify.com/v1/me/playlists',
      {
        name: content.id,
        description: 'my playlist',
        public: false 
      },
      { headers }
    );
    const playlistId = playlistResponse.data.id;
    const trackUri = `spotify:track:${content.id}`; 
    const addTrackResponse = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { uris: [trackUri] },
      { headers }
    );
    console.log('Track added to playlist:', addTrackResponse.data);
    forceUpdate()
  } catch (error) {
    console.error('An error occurred:', error.response ? error.response.data : error.message);
  }
}







const AddSongToPlaylist=(playlistId)=>{
const playlist = playlistId; 
const trackUri = `spotify:track:${content.id}`; 
const accessToken = token;

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
};

axios.post(`https://api.spotify.com/v1/playlists/${playlist}/tracks`, { uris: [trackUri] }, { headers })
  .then(response => {
    console.log('Track added to playlist:', response.data);
  })
  .catch(error => {
    console.error('Error adding track to playlist:', error.response.data);
  });

}

const changeCurrentPlaylist = (selectedPlaylistId) => {
dispatch({ type:reducerCases.SET_PLAYLIST_ID,selectedPlaylistId});
AddSongToPlaylist(selectedPlaylistId)

};




const handleCloseClick = () => {
    closePlaylist();
  };
  return (
    <PlaylistContainer>
    <Wrapper>
    <CloseButton  onClick={handleCloseClick}/>
    <Playlists >
    
    <Lists onClick={()=>createPlaylistAndAddSong()}><Addicon/><Links>CREATE PLAYLISTS</Links></Lists>
      {
          playlists.map(({name,images,id})=>{
            return (
              <Lists key={id} onClick={()=>{changeCurrentPlaylist(id);}} ><Img src={images}/><Links>{name}</Links></Lists>
            )
          })

        }
  </Playlists>
    </Wrapper>
    </PlaylistContainer>
  )
}


export default  Playlist


