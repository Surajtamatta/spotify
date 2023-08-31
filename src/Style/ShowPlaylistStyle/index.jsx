import { styled } from "styled-components";
import { Link } from "react-router-dom"
import {RiAddFill} from "react-icons/ri"
import {TiTimes} from "react-icons/ti"

export const PlaylistContainer= styled.div`
  height: 100%;
  min-height: 400px;
  display: flex;
  position: absolute;
  z-index: 99;
  top:50px;
  right: 30px;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  border-radius: 10px;
  overflow-y:scroll;
  align-items: center;
  background: rgba(101, 153, 158, 0.66);
  &::-webkit-scrollbar{
    width: 3.5px;
    border-radius: 50%;
    right: 2px;
    &-thumb{
    background-color: #000000;
  }
}

`
export const Wrapper= styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
 
`

export const Links = styled(Link)`
  display: flex;
  justify-content:center;
  font-family: 'Outfit';
  align-items: center;
  color: white;
  text-align:start;
  list-style: none;
  text-decoration: none;
  gap: 10px;
 
`
export const Img=styled.img`
width:100%;
height:100%;
max-width:40px;
max-height: 40px;
border-radius: 5px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
position: relative;
`

export const Playlists = styled.ul`
width: 100%;

display:flex;
justify-content:space-evenly;
flex-direction: column;
justify-items: center;
position: relative;
gap: 5px;

`
export const Lists = styled.li`
width: 100%;
max-height: 50px;
display: flex;
flex-direction:row;
gap: 10px;
padding:5px;
font-size: 14px;
justify-content:flex-start;
align-items: center;

background: rgb(101,153,158,0.2);
box-shadow:5px 5px 10px -1px rgb(20 21 42);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
&:hover{
    background: rgba(137, 187, 192, 0.455);
}
`


export const Addicon = styled(RiAddFill)`
width:100%;
height:100%;
max-width:30px;
max-height: 30px;
border-radius: 10px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
position: relative;
color: #86d8d6;
background: rgba(101,153,158,0.2);
box-shadow:5px 5px 10px 3px rgb(20 21 42); ;
path{
filter:drop-shadow(1px 1px 0.5px rgb(20 21 42));
}
`
export const CloseButton=styled(TiTimes)`
width:100%;
height:100%;
max-width:30px;
min-height: 30px;


`