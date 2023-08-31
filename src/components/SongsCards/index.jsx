import React, {useState } from 'react'

import{   
    Card,
    Image,
    Links,
    Title,
    Text,
    PlayButton
} from "../../Style/SongsCardsStyle"
import { reducerCases } from '../../utils/Constants'
import { useStateProvider } from '../../utils/stateProvider'
import { useDummy, usePages } from '../../utils/Context'
const SongsCards = ({content}) => {
   const [{ token, selectedSong, selectedSongId}, dispatch] = useStateProvider();


    const [isHover,setIsHover] = useState(false)
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };
 

  const artists = content?.artists?.map(items=>{
    return items.name+', '
  })
  const changeCurrentPlaylist = (selectedSongId) => {
    dispatch({ type:reducerCases.SET_SONG_ID,selectedSongId});
  };

  const {setDummy} = useDummy()
  const {setShowPages} =usePages();
  const handleDummy = () =>{ 
    setDummy( {albums:false,artists:false,bollywood:false,tracks:false,playlists:false,songlists:true})
   setShowPages({home:true,search:false,library:false,playlist:false,like:false})
    }

  return (
        <>
        
        
                
                         <Card   onMouseEnter={handleMouseEnter}   onMouseLeave={handleMouseLeave}
                            onClick={()=>{changeCurrentPlaylist(content.id);
                                          handleDummy();
                                          }}
                        >
                          <Links>
                          <Image backgroundimg={content.images ? content?.images[0]?.url :'' }>
                             <PlayButton hover={isHover}/>
                            </Image>
                          <Title>{content.name}</Title>
                          < Text>{artists}</Text>
                          </Links>
                          </Card>
                      
                
         
    </>
				

  )
}

export default SongsCards
