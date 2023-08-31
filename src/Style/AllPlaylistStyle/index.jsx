import { styled } from "styled-components";
import { Link } from "react-router-dom"
import {RiAddFill} from "react-icons/ri"


export const PlaylistContainer= styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  padding:0 15px;
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
export const Wrapper= styled.div`

  width: 100%;
  display: flex;
  gap: 30px;
  height: 100%;
  max-height:1700px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 
 
`

export const Links = styled(Link)`
  display: flex;
  justify-content:center;
  font-family: 'Outfit';
  align-items: center;
  color: white;
  list-style: none;
  text-decoration: none;
  text-align: center;
  
  @media (max-width:600px){
    flex-direction: column;
}
 
`
export const Img=styled.img`
  width:100%;
  height:100%;
max-width:150px;
max-height: 150px;
border-radius: 10px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
position: relative;
`

export const Playlists = styled.ul`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(165px,1fr));
justify-content:space-evenly;
justify-items: center;
gap: 16px;
padding: 20px 0;
`
export const Lists = styled.li`
width: 100%;
min-width:125px;
max-width:150px;
max-height: 200px;
min-height: 200px;
display: flex;
padding: 10px;
flex-direction: column;
gap: 5px;
position: relative;
justify-content: space-between;
align-items: center;
background: rgb(101,153,158,0.2);
box-shadow:5px 5px 10px -1px rgb(20 21 42);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
&:hover{
    background: rgba(137, 187, 192, 0.455);
box-shadow: 5px 5px 10px -1px   #54c2b9c1;
}
@media (max-width:500px){
    min-width: 130px;
    max-width: 170px;
    max-height: 250px;
    min-height: 250px;
}
@media (max-width:500px){
    max-width: 155px;
}
`


export const Addicon = styled(RiAddFill)`
width:100%;
height:100%;
max-width:150px;
max-height: 150px;
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

