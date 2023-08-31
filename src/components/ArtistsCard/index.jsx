import React, {  useState } from 'react'

import{
    Card,
    Image,
    Links,
    Title,
    PlayButton
} from "../../Style/ArtistsCardStyle"

const SongsCards = ({content}) => {
    const [isHover,setIsHover] = useState(false)
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };


  return (

    
        <>
        
        
                
                          <Card   onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>
                          <Links>
                          <Image backgroundimg={content?.images[0]?.url }> <PlayButton hover={isHover}/></Image>
                      <Title>{content.name}</Title> 
                          </Links>
                          </Card>
                      
                
         
    </>
				

  )
}

export default SongsCards
