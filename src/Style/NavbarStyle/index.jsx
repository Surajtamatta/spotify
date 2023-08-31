
import styled from "styled-components"
import {FaSpotify,FaHome,FaSearch} from "react-icons/fa"
import {VscLibrary,VscGlobe} from "react-icons/vsc"  
import {MdAddToPhotos} from "react-icons/md" 
import {FcLike} from "react-icons/fc"   


export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  max-width: 245px;
  background: rgb(1,0,8);
  border-right:3.5px solid rgba(32, 59, 42, 0.786);
background: linear-gradient(0deg, rgba(1,0,8,1) 0%, rgba(7,15,24,1) 23%, rgba(16,52,49,0.9697128851540616) 48%, rgba(24,94,71,0.9501050420168067) 64%, rgba(0,255,136,0.8156512605042017) 99%);
   @media (max-width:750px){
    max-width:200px;
}
@media (max-width:600px){
  z-index: 3;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction:row;
  align-items: center;
  width: 100%;
  height: 64px;
  max-width: 600px;
  border: none;
}
`
export const LogoBox = styled.div`
display: flex;
align-items: center;
justify-content:center;
gap: 15px;
height: 100%;
max-height: 60px;
background-color:  rgba(10, 10, 10, 0.56);

box-shadow:rgba(10,10,10,0.56) -13px 20px 25px 25px, inset rgb(39,161,106) -20px 20px 50px -40px;
width: 100%;
@media (max-width:600px){
  max-height: 60px;
  max-width: 90px;
  position: fixed;
  top: 0;
  left: 0;
  gap: 5px;
  padding:0 5px;
  background: transparent;
  box-shadow: none;
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
  max-width: 30px;
  max-height: 30px;
  }
 
`
export const HeaderText=styled.h1`
  color: white;
   font-size: 30px;
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   font-weight: 400;
   @media (max-width:600px){
     font-size:20px;
   }
 
 `
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width:600px){
background-color:  rgba(0, 0, 0, 0.5) ;
  display: flex;
  justify-content: space-evenly;
  flex-direction:row;
  align-items: center;
  width: 100%;
  height: 64px;
  box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.5) ;
}

`
export const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content:center;
  height: 100%;
 max-height: 40px;
  padding:5px 25px;
  &:hover{
    background: #71a18a;
   }
  @media (max-width:750px){
   padding: 5px;
}


`
export const Links = styled.button`
  display: flex;
  justify-content:flex-start;
  font-family: 'Outfit';
  align-items: center;
  color: white;
  list-style: none;
  text-decoration: none;
  background: transparent;
  border: none;
  @media (max-width:600px){
    flex-direction: column;
}
 
`
export const LibraryList = styled.li`
   display: flex;
  flex-direction: column;
  justify-content:center;
  height: 100%;
  max-height: 40px;
  padding:5px 25px;

  &:hover{
    background: #71a18a;
   }
  @media (max-width:750px){
   padding: 5px;
}
  
  @media (max-width:600px){
    display: none;
}
 
`
export const Name = styled.h1`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  color: white;
  font-size: 20px;
  gap: 5px;
  list-style: none;
  line-height: 5px;
  @media (max-width:600px){
    font-size: 12px;
    font-weight: 400;
}
`

export const NameText = styled.h1`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  color: white;
  font-size: 20px;
  gap: 5px;
  list-style: none;
  line-height: 5px;
  @media (max-width:600px){
    display: none;
}
`

export const Fahome=styled(FaHome)`
  color: white;
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`
export const Fasearch=styled(FaSearch)`
  color: white;
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`
export const Vsclibrary=styled(VscLibrary)`
  color: white;
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`
export const Img=styled.img`
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`

export const MdaddToPhotos=styled(MdAddToPhotos)`
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`
export const Fclike=styled(FcLike)`
  color: white;
  width: 25px;
  height: 25px;
  padding: 10px;
  @media (max-width:600px){
   padding: 5px;
}
`

export const Playlists = styled.ul`
width: 100%;
max-width: 242px;
height: 100%;
overflow: hidden;
height: 50vh;
max-height: 100%;
overflow: auto;
&::-webkit-scrollbar{
  width: 3.5px;
  border-radius: 50%;
  right: 2px;
  &-thumb{
    background-color: #4c4747a0;
  }
}
@media (max-width:600px){
  display: none;
}
`
export const Lists = styled.li`
  display: flex;
  flex-direction:row;
  justify-content:flex-start;
  height: 100%;
  max-height: 40px;
  padding:5px 20px;
  color: white;
  &:hover{
    background: #527766;
    color: #928f8f;
   }
  @media (max-width:750px){
   padding: 5px;
 
}
`


export const PlaylistsWrapper=styled.div`
width: 100%;
max-width: 242px;
height: 100%;
display: flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-start;
padding: 30px 0;
@media (max-width:600px){
    display: none;
  }

`
export const Wrapper=styled.div`
height: 100%;
max-height: 40px;
display: flex;
padding: 10px;
gap: 10px;
flex-direction:row;
justify-content:flex-start;
align-items: center;
`
export const Language=styled.div`
width: 100%;
max-width: 120px;
height: 100%;
max-height: 30px;
border: 2px solid white;
border-radius: 50px;
display: flex;
color: white;
padding: 5px;
justify-content:space-evenly;
align-items: center;
`
export const GlobeIcon=styled(VscGlobe)`
width: 100%;
max-width: 40px;
height: 100%;
max-height: 25px;
color: white;
`

export const Text=styled.h1`
  color: white;
   font-size: 12px;
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   font-weight: 400;
   @media (max-width:600px){
     font-size:20px;
   }
 
 `