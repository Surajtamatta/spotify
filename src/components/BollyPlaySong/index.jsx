import axios from "axios";
import React, { useEffect,useState } from "react";
import { useStateProvider } from "../../utils/stateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/Constants";
import defaultimage from "../../assets/defaultimage.png"
import ShowPlaylist from "../../components/ShowPlaylist"
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
    Row,
    RowWrapper,
    Tracks,
    ContentDetail,
    TrackImg ,
    Images,
    Info,
    AddPlaylistSong,
    LikesContent,
    HeartLikes,

} from "../../Style/PlaySonglistStyle"
import { usePlayer } from "../../utils/Context";

 const BollyPlaySong=({headerBackground})=>{
  const [addlikes,setAddlikes]=useState(false)
  const [{ token, selectedSong, selectedSongId}, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${selectedSongId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      
     
      const selectedSong = {
        id: response.data.id,
        name: response.data.name,
        type:response.data.type,
      image: response.data?.images[0]?.url ? response.data?.images[0]?.url : defaultimage ,
        
        tracks: response.data?.tracks?.items.map(( track ) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album ? track.album.images[2].url : response.data?.images[0]?.url,
          duration: track.duration_ms,
          album: track.name,
          context_uri: track.uri,
          track_number: track.track_number,
        })),
      }; console.log(response.data?.tracks?.items)
      dispatch({ type: reducerCases.SET_SELECTEDSONG, selectedSong });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedSongId]);


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

    if (response.status === 200) {
      console.log('Song saved successfully.');
      setAddlikes(trackId)
    }
  } catch (error) {
    console.error('Error saving song:', error.response ? error.response.data : error.message);
 }
};

  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

const {setShowPlayer} = usePlayer()
const PlayerHandle=()=>{
  setShowPlayer(true)
  
}

const ChangeSongUri = (selectSongUri) => {
  dispatch({ type:reducerCases.SET_SONGURI,selectSongUri});
   PlayerHandle()
};


const [isHover,setIsHover] = useState(null)
    const handleMouseEnter = (index) => {
        setIsHover(index);
     };
     const handleMouseLeave = () => {
        setIsHover(null);
     };

const [showplaylist ,setShowPlaylist] = useState(false)
const HandleShowPlaylist = (trackId)=>{
  setShowPlaylist(trackId)
}
const closehandlePlaylist = (trackId)=>{
  setShowPlaylist(false)
}

  return (
    <Container >
      {selectedSong && (
 <>
          <Playlist>
            <ImageContainer >
              <Img src={selectedSong.image} alt="selected playlist" />
            </ImageContainer >
            <PlaylistDetails >
              <Type >{selectedSong.type}</Type>
              <Title  >{selectedSong.name}</Title>
              <Description >{selectedSong.description}</Description>
            </PlaylistDetails>
        </Playlist>
          <Lists>
            <HeaderRow headerBackground={headerBackground} >
              <HeadContent  headerBackground={headerBackground}  >
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
              {selectedSong.tracks.map(
                (
                  {
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
                      key={id}
                    >
                      <RowWrapper
                       onClick={() =>{
                        ChangeSongUri({context_uri});
                      }}>
                      <Content>
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
                      <LikesContent  >
                         {isHover===index &&   <HeartLikes  addLikes={id===addlikes ? addlikes  :null }  onClick={()=>saveLikedSong(id)}/>}
                          
                        </LikesContent>
                      <Content  >
                        <Text>{msToMinutesAndSeconds(duration)}</Text>
                      </Content>
                      <LikesContent  >
                         {isHover===index &&  <AddPlaylistSong  onClick={()=>HandleShowPlaylist(index)}/>}
                          {showplaylist===index && <ShowPlaylist  closePlaylist={closehandlePlaylist}  content={{id,name,image}} />}
                        </LikesContent>
                      
                    </Row>
                  );
                }
              )}
            </Tracks>
          </Lists>
  </>
      )}
    </Container>
  );
}


export default BollyPlaySong