import styled from "styled-components";
import {AiFillHeart} from "react-icons/ai"
import {TbPlaylist,TbPlaylistOff} from "react-icons/tb"

export const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
export const Wrapper=styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  @media (max-width:950px) {
    padding: 15px;
  }
  overflow-y:scroll;
  &::-webkit-scrollbar{
    width: 3.5px;
    border-radius: 50%;
    right: 2px;
    &-thumb{
    background-color: #000000;
  }
}

`
 
export const Playlist=styled.div`
  
    display: flex;
    align-items: center;
    gap: 1.5rem; 
    width: 100%;
    
   
`
export const ImageContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #63d471;
background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);

`
export const Images=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img=styled.img`
    width: 100%;
    height: 100%;
    max-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    @media (max-width:950px) {
     min-height: 150px;
    min-width: 150pX;
    aspect-ratio: 1/1;
  }
`
export const PlaylistDetails=styled.div`
     display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #c5c2c2;
`
export const Type=styled.h1`
     
    
    @media (max-width:950px) {
     font-size: 25px;
  }
`
export const Title=styled.h1`
      font-size: 4rem;  
    color: white;
     @media (max-width:950px) {
     font-size: 30px;
  }
`
export const Description=styled.p`
    @media (max-width:950px) {
     font-size: 15px;
  }
`
export const Lists=styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`
export const HeaderRow=styled.div`
     display: grid;
     grid-template-columns: 0.3fr 2.5fr 2.5fr 0.3fr;
      margin: 1rem 0 0 0;
      grid-gap: 20px;
      position: sticky;
      top:-20px;
      z-index: 2;
      padding:  15px 0;
      transition: 0.3s ease-in-out;
      background: ${({ headerBackground }) =>
        headerBackground ? " rgb(25, 102, 67)" : "none"};
      box-shadow: ${({ headerBackground }) =>
        headerBackground ? " #196643 0px 0px 20px 20px" : "none"};

`
export const HeadContent=styled.div`
    display: flex;
    align-items: center;
    color:${({ headerBackground }) => headerBackground ? "rgb(255, 255, 255)" : "#c8c8c8"};

`
export const Content=styled.div`
    display: flex;
    align-items: center;
    color: #c8c8c8;
    
`
export const Text=styled.span`
    font-size: 18px;
    display: flex;
    justify-content:flex-start;
    text-align:left;
    @media (max-width:700px) {
     font-size: 14px;
  }
`
export const Tracks=styled.ul`
    width: 100%;
      display: flex;
      flex-direction: column;
      

`

export const Row=styled.li`
        padding: 15px 0;
        display: grid;
        grid-gap: 10px;
        position: relative;
        grid-template-columns:5fr 0.2fr 0.2fr 0.2fr;
        &:hover {
          background-color: rgba(43, 119, 73, 0.7);
        } 
`
export const RowWrapper =styled.div`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 0.3fr 2.5fr 2.5fr;
`

export const ContentDetail=styled.div`
    display: flex;
    gap: 1rem;
    max-width: 350px;
    display: flex;
    justify-content: flex-start;

`

export const TrackImg =styled.img`
      height: 40px;
            width: 40px;
`
export const Info=styled.div`
     display: flex;
        flex-direction: column;
        color: #abaaaa;
`

export const LikesContent=styled.div`
    width: 100%;
    height: 100%;
    max-width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`

export const HeartLikes=styled(AiFillHeart)`
    width: 100%;
    height: 100%;
    max-width: 25px;
    max-height: 25px;

    color:${props =>props.addLikes ? 'red' :  'white'};
    cursor: pointer;
    
`
export const DeleteHeartLikes=styled(AiFillHeart)`
    width: 100%;
    height: 100%;
    max-width: 25px;
    max-height: 25px;
   
    color:${props =>props.deleteLikes ? 'white' : 'red'};
    cursor: pointer;
    
`
export const DeletePlaylist=styled(TbPlaylistOff)`
    width: 100%;
    height: 100%;
    max-width: 25px;
    max-height: 25px;

    color:${props =>props.addLikes ? ' white' :  'white'};
    cursor: pointer;
    
`
export const AddPlaylistSong=styled(TbPlaylist)`
    width: 100%;
    height: 100%;
    max-width: 25px;
    max-height: 25px;
  
    color:${props =>props.addLikes ? ' white' :  'white'};
    cursor: pointer;
    
`
export const PlayListWrapper=styled.div`
  padding: 20px 15px;
  width: 100%;
    min-width: 300px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y:scroll;
  &::-webkit-scrollbar{
    width: 3.5px;
    border-radius: 50%;
    right: 2px;
    &-thumb{
    background-color: #000000;
  }
}
`