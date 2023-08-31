import axios from "axios";
import React, { useEffect,useState,useReducer } from "react";
import { useStateProvider } from "../../utils/stateProvider";
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from "../../utils/Constants";
import like from "../../assets/like.png"
import {
  
    Wrapper,
    Playlist,
    ImageContainer,
    Images,
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
    LikesContent ,
    DeleteHeartLikes,
    Tracks,
    ContentDetail,
    TrackImg ,
    Info,
} from "../../Style/PlaySonglistStyle"
import { usePlayer } from "../../utils/Context";
import Footer from "../../components/Footer";

 const BollyPlaySong=({headerBackground})=>{
  const [reducerValue , forceUpdate] = useReducer(x=>x+1,0)
  const [deleteLikes,setDeleteLikes] = useState(0)
  const [{ token, selectedSong, selectedSongId}, dispatch] =
    useStateProvider();
  useEffect(() => {


    const getSavedSong = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/tracks',
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      
      console.log(response.data)
     const selectedSong = {
      image:like,
      type:'Playlist',
      name:'Liked Song',

      item:response.data.items.map(items=>({
              id:items.track.id,
              name: items.track.name,
              artists: items.track.artists.map((artist)=>artist.name),
              image: items.track.album? items.track.album.images[2].url :null,
              context_uri: items.track.uri,
              type:items.track.type,
              album:items.track.album? items.track.album.name :null,
              duration:items.track.duration_ms,
            })),
      }
      console.log(response.data)
      dispatch({ type: reducerCases.SET_SELECTEDSONG, selectedSong });
    };
    getSavedSong ();

  }, [token, dispatch, selectedSongId,reducerValue]);


  const removeLikedSong = async (trackId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `https://api.spotify.com/v1/me/tracks?ids=${trackId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        console.log('Song deleted successfully.');
        setDeleteLikes(trackId)
        forceUpdate();
      }
    } catch (error) {
      console.error('Error deleted song:', error.response ? error.response.data : error.message);
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
  PlayerHandle();
};



const [isHover,setIsHover] = useState(null)
    const handleMouseEnter = (index) => {
        setIsHover(index);
     };
     const handleMouseLeave = () => {
        setIsHover(null);
     };
  return (
   <>
      {selectedSong && (
      <Wrapper>  
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
              {selectedSong.item.map(
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
                    <Row key={id} 
                    onMouseEnter={()=>handleMouseEnter(index)}   
                    onMouseLeave={handleMouseLeave}
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
                          <Text>{name}</Text>
                          <Text>{artists.join(', ')}</Text>
                        </Info>
                      </ContentDetail>
                      <Content >
                        <Text>{album}</Text>
                      </Content>
                      </RowWrapper>
                      <LikesContent >
                          {isHover===index && <DeleteHeartLikes  deleteLikes={id===deleteLikes ? deleteLikes :null}  onClick={()=>removeLikedSong(id)}/>}
                        </LikesContent>
                      <Content >
                        <Text>{msToMinutesAndSeconds(duration)}</Text>
                      </Content>
                    </Row>
                  );
                }
              )}
            </Tracks>
          </Lists>

          <Footer/>
        </Wrapper>
      )}
   </>
  );
}


export default BollyPlaySong