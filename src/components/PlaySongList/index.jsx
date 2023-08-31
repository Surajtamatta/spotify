import axios from "axios";
import React, { useEffect ,useState,useReducer} from "react";
import { useStateProvider } from "../../utils/stateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/Constants";
import defaultimage from "../../assets/defaultimage.png"
import {
    Container,
    Playlist,
    ImageContainer,
    Img,
    PlaylistDetails,
    Type,
    Title,
    Description,
    Lists,
    HeaderRow,
    Content,
    HeadContent,
    Text,
    LikesContent,
    HeartLikes,
    DeletePlaylist,
    Row,
    RowWrapper,
    Tracks,
    ContentDetail,
    Images,
    TrackImg ,
    Info,



} from "../../Style/PlaySonglistStyle";
import { usePlayer } from "../../utils/Context";

 const PlaySongList=({headerBackground})=>{
  const [reducerValue , forceUpdate] = useReducer(x=>x+1,0)
  const [addlikes,setAddlikes]=useState(false)
  const [{ token, selectedPlaylist, selectedPlaylistId, }, dispatch] =useStateProvider();

useEffect(() => {
  const getInitialPlaylist = async () => {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data)
    const selectedPlaylist = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description.startsWith("<a")
        ? ""
        : response.data.description,
      image: response.data.images[0] ? response.data.images[0].url : defaultimage,
      tracks: response.data.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((artist) => artist.name),
        image: track.album.images[2] ? response.data?.images[0]?.url : defaultimage ,
        duration: track.duration_ms,
        album: track.album.name,
        context_uri: track.album.uri,
        track_number: track.track_number,
      })),
    };
    
    dispatch({ type: reducerCases.SET_SELECTEDPLAYLIST, selectedPlaylist });
  };
  getInitialPlaylist();
}, [token, dispatch, selectedPlaylistId,reducerValue]);



const saveLikedSong = async (trackId) => {
  try {
    const response = await axios({
      method: 'put',
      url: `https://api.spotify.com/v1/me/tracks?ids=${trackId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data)
    if (response.status === 200) {
      console.log('Song saved successfully.');
      setAddlikes(trackId)
      
    }
  } catch (error) {
    console.error('Error saving song:', error.response ? error.response.data : error.message);
 }
};


const DeletePlaylistSong = async (trackId) => {
  try {
    const response = await axios.delete(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        tracks: [{ uri: `spotify:track:${trackId}` }]
      }
    });
    console.log(response.data)
   forceUpdate()
  } catch (error) {
    console.error('Error deleting song:', error);
  }
};

const {setShowPlayer} = usePlayer()
const PlayerHandle=()=>{
  setShowPlayer(true)
}
const ChangeSongUri = (selectSongUri) => {

  dispatch({ type:reducerCases.SET_SONGURI,selectSongUri});
  PlayerHandle()
};



const msToMinutesAndSeconds = (ms) => {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};





const [isHover,setIsHover] = useState(null)
    const handleMouseEnter = (index) => {
        setIsHover(index);
       
     };
     const handleMouseLeave = () => {
        setIsHover(null);
     };
     
  return (
    <Container >
      {selectedPlaylist && (
     <>
          <Playlist>
            <ImageContainer >
              <Img src={selectedPlaylist.image} alt="selected playlist" />
            </ImageContainer >
            <PlaylistDetails >
              <Type >PLAYLIST</Type>
              <Title  >{selectedPlaylist.name}</Title>
              <Description >{selectedPlaylist.description}</Description>
            </PlaylistDetails>
        </Playlist>
          <Lists>
            <HeaderRow headerBackground={headerBackground} >
              <HeadContent headerBackground={headerBackground} >
                <Text>#</Text>
              </HeadContent>
              <HeadContent  >
                <Text>TITLE</Text>
              </HeadContent>
              <HeadContent  >
                <Text>ALBUM</Text>
              </HeadContent>
              <HeadContent >
                <Text>
                  <AiFillClockCircle />
                </Text>
              </HeadContent>
            </HeaderRow>
            <Tracks >
              {selectedPlaylist.tracks.map(({
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                  },
                  index
                ) => {
                  return (
                    <Row
                    onMouseEnter={()=>handleMouseEnter(index)}   
                    onMouseLeave={handleMouseLeave}
                      key={index}
                     >
                      <RowWrapper
                       onClick={() =>{
                        ChangeSongUri({context_uri});
                      }}>

                      <Content  >
                        <Text>{index + 1}</Text>
                      </Content>
                      <ContentDetail  >
                        <Images>
                          <TrackImg src={image} alt="track" />
                        </Images>
                        <Info  >
                          <Text  >{name}</Text>
                          <Text>{artists.join(', ')}</Text>
                        </Info>
                      </ContentDetail>
                      <Content >
                        <Text>{album}</Text>
                      </Content>
                      </RowWrapper>

                      
                          <LikesContent>
                          {isHover===index && <HeartLikes addLikes={id===addlikes ? addlikes  :null }  onClick={()=>saveLikedSong(id)}/>}
                          </LikesContent>
                       
                        <Content>
                        <Text>{msToMinutesAndSeconds(duration)}</Text>
                        </Content>
                          <LikesContent>
                          {isHover===index && <DeletePlaylist   onClick={()=>DeletePlaylistSong(id)}/>}
                         </LikesContent>
                    </Row>
                  );
                }
              ) 
             }
            </Tracks>
          </Lists>
          </>
      )}
    </Container>
  );
}


export default PlaySongList