import styled from "styled-components"
import {FaSpotify,FaAngleLeft,FaAngleRight,FaSearch} from "react-icons/fa"

export const HeaderContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color:  rgba(10, 10, 10, 0.56);
    box-shadow:rgba(10,10,10,0.56)  12px 20px 25px 25px, inset rgb(39,161,106) 20px 20px 50px -30px;
    height: 100%;
    backdrop-filter: blur(20px);
    min-height: 60px;
    max-height: 60px;
    width: 100%; 
    z-index:1;
    @media (max-width:600px){
      
        justify-content: flex-end;
        box-shadow: rgba(10, 10, 10, 0.56) 10px 20px 30px 30px;
   }
`
export const Navigation=styled.div`
width: 100%;
max-width: 500px;
height: 100%;
display: flex;
justify-content:flex-start;
align-items: center;
gap: 10px;
padding: 0 15px;
@media (max-width:600px){
  justify-content: flex-end;
  padding: 0 5px;
}
`

export const NavIcon = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
width: 100%;
height: 100%;
max-width: 90px;
svg{
  font-size: 25px;
}
`
export const Left=styled(FaAngleLeft)`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(33, 32, 32, 0.871);
color: white;
border-radius: 50%;
font-size:35px;
font-weight: 500;
@media (max-width:600px){
  display: none;
}
    
`
export const Right=styled(FaAngleRight)`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(33, 32, 32, 0.871);
color: white;
font-size: 35px;
font-weight: 500;
border-radius: 50%;
@media (max-width:600px){
  display: none;
}
`

export const LogoBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
height: 100px;
width: 100%;
max-width: 200px;
@media (max-width:600px){
  max-height: 64px;
  max-width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  gap: 10px;
  }
`
export const Icon=styled(FaSpotify)`
  color: white;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  @media (max-width:600px){
    width: 100%;
  height: 100%;
  max-width: 35px;
  max-height: 35px;
  }
 
`
export const Text=styled.h1`
   color: white;
  font-size: 35px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 600;
  @media (max-width:600px){
    font-size: 30px;
  }

`
export const Registration=styled.div`
width: 100%;
max-width: 230px;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
padding:0 5px;
@media (max-width:600px){
   gap: 10px;
   max-width:${props=>props.showsearch ? '60px' : '200px'};
  }
`
export const SignUp=styled.button`
color: #d5d2d2;
font-size: 18px;
background-color: transparent;
border: none;
@media (max-width:600px){
    font-size: 15px;
    display: ${props=>props.showsearch ?  'none' : 'flex'};
  }
`
export const VerticalLine=styled.div`
    background-color: #656565e4;
    max-width: 2px;
    max-height: 35px;
    width: 100%;
    height: 100%;
    @media (max-width:600px){
    display: ${props=>props.showsearch ?  'none' : 'flex'};
}
`
export const Login=styled.button`
color: rgb(215, 215, 215);
font-size: 18px;
width: 100%;
height: 100%;
max-height: 40px;
max-width: 75px;
text-align: center;
border: 2px solid  rgba(144, 144, 144, 0.871) ;
background-color: transparent;
border-radius: 25px;
&:active{
  color: rgb(5, 5, 5);
  border-color:   rgba(71, 67, 67, 0.871) ;
  background-color: rgba(223, 223, 223, 0.829);
}
@media (max-width:600px){
    max-height: 35px;
    max-width: 55px;
    font-size: 14px;
  }
  
`


export const SearchBox =styled.div`
width: 100%;
max-width: 300px;
height: 100%;
max-height: 40px;
background-color: rgba(255, 255, 255, 0.901);
border-radius: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width:600px){
  max-width: 200px;
  max-height: 35px;
}
`
export const SearchInput =styled.input.attrs({type:"text",placeholder:"Artists , songs or podcast"})`
width: 100%;
height: 100%;
text-indent: 15px;
border: none;
background:transparent;
border-top-left-radius:50px ;
border-bottom-left-radius:50px ;

outline: none;
`
export const SearchIcon =styled(FaSearch)`
color: #3f3d3d;
width: 25px;
height: 25px;
padding: 10px;
@media (max-width:600px){
 padding: 5px;
}
`