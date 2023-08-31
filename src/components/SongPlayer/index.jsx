import React from 'react'
import {
  Container,
} from "../../Style/SongPlayerStyle"
import SpotifyPlayer from "react-spotify-web-playback"
import { useStateProvider } from '../../utils/stateProvider'
const SongPlayer = () => {
  const [{token,selectSongUri}] = useStateProvider();
  if (!token) return null

const PlayerStyle={
    bgColor: '#13685ef5',
    color: '#fff',
    loaderColor: '#9adbd3',
    sliderColor: '#22df96',
    savedColor: '#f80404',
    trackArtistColor: '#cccccce2',
    trackNameColor: '#dbd3d3e0',
}

  return (
    
    <Container>
        <SpotifyPlayer
        token={token}
        showSaveIcon
        play={true}
        uris={selectSongUri ? [selectSongUri.context_uri] :[]}
        styles={PlayerStyle}
        />
    </Container>
  )
}

export default SongPlayer