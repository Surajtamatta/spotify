import styled from "styled-components"
import {BsPlayCircleFill} from "react-icons/bs"



export const Card=styled.div`
width: 100%;
min-width:130px;
max-width:155px;
max-height: 180px;
min-height: 185px;
display: flex;
padding: 10px;
flex-direction: column;
gap: 5px;
justify-content: center;
align-items: center;

@media (max-width:500px){
    min-width: 130px;
    max-width: 170px;
    max-height: 180px;
min-height: 185px;
}
@media (max-width:500px){
    max-width: 155px;
}
`
export const Image=styled.div`
background:  url(${props=>props.backgroundimg}),no-repeat;
background-size: cover;
width: 100%;
height: 100%;
max-width:160px;
max-height: 160px;
border-radius: 50%;
cursor: pointer;
border:5px solid  rgba(137, 187, 192, 0.455);
display: flex;
box-shadow:5px 5px 10px -1px rgb(20 21 42);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
justify-content: flex-end;
align-items: flex-end;
position: relative;
&:hover{
  border:5px solid rgba(137, 187, 192, 0.455);
box-shadow: 5px 5px 10px -1px   #54c2b9c1;
}
`
export const Links=styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
gap: 5px;
justify-content:space-between;
align-items: center;
`
export const Title=styled.h1`
    font-size: 14px;
    color: #ffffff;
    width: 100%;
    font-weight: 400;
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;

`
export const Text=styled.div`
    font-size: 12px;
    color: #c4eead;
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;
    width: 100%;
`

export const PlayButton=styled(BsPlayCircleFill)`
display:flex;
position :absolute;
bottom: ${props=>props.hover ? '10px' : '0px'};
background-color: #caf5f7;
color: #14eb80;
border-radius: 50%;
border: 3px solid  #caf5f7;
margin: 0 5px;
width: 100%;
height: 100%;
max-width:40px;
min-width: 40px;
max-height: 40px;
min-height: 40px;
transition: all ease 0.6s;
opacity: ${props=>props.hover ? '1' : '0'};


`