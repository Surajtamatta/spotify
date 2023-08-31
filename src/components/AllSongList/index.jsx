import React,{useRef,useState} from 'react'
import Footer from '../../components/Footer';
import Albums from '../../components/Albums';
import Artists from '../../components/Artists';
import Tracks from '../../components/Tracks';
import Bollywood from '../../components/Bollywoods';
import PlaySonglist from "../../components/PlaySongList";
import BollyPlaySong from "../../components/BollyPlaySong"
import { useDummy } from '../../utils/Context';
import {
    PlayListWrapper,
  } from "../../Style/HomeStyle"

const AllSongList = () => {
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >=264
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  
    const {...dummy} = useDummy();
  return (
    <PlayListWrapper ref={bodyRef} onScroll={bodyScrolled}>
        {dummy.albums && <Albums  />}
        {dummy.artists && <Artists /> }
        {dummy.bollywood && <Bollywood />}
        {dummy.tracks && <Tracks />}
        {
        dummy.playlists && <PlaySonglist headerBackground={headerBackground}/>
        }
        {
        dummy.songlists && <BollyPlaySong headerBackground={headerBackground}/>
        }
        <Footer/> 
     </PlayListWrapper>
  )
}

export default AllSongList