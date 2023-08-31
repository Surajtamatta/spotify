import styled from "styled-components";
import {Link} from'react-router-dom'
import {FaTwitter,FaInstagram,FaFacebook} from "react-icons/fa"

export const FooterContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
padding: 20px 0 0 0;
min-height:250px;
position:relative;
bottom: 0;
@media (max-width:750px){
    max-height:270px;
    min-height: 300px;
}
@media (max-width:600px){
    align-items: center;
    justify-content: flex-start;
    min-height:400px;
}
`
export const Wrapper=styled.div`
display: flex;
justify-content:space-between;
align-items:flex-start;
width: 100%;
height: 100%;
min-width: 300px;
max-height:180px;
@media (max-width:750px){
    flex-wrap: wrap;
    max-height:230px;
}
@media (max-width:600px){
    justify-content:center;

}
`
export const ContainerOne=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
height: 100%;
max-width: 450px;
padding: 0  15px;
max-height:180px;

`
export const ContainerTwo=styled.div`
display: flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
gap: 20px;
width: 100%;
height: 100%;
padding: 0 25px;
max-width: 150px;
max-height:40px;
@media (max-width:600px){
    justify-content:center;

}
`
export const Companylinks=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
height: 100%;
max-width: 100px;
@media (max-width:600px){
    align-items:center;

}
 
`
export const CommunitiesLinks=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
height: 100%;
max-width: 100px;
@media (max-width:600px){
    align-items:center;

}
`
export const UseLinks=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
max-width: 100px;
height: 100%;
@media (max-width:600px){
    align-items:center;

}
`
export const Links=styled(Link)`
color: #ffffff;
text-decoration: none;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2px;
padding: 5px;
@media (max-width:600px){
    font-size: 14px;
}
`

export const SocialContact=styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    max-height: 40px;
    gap: 15px;

`


export const SocialLinks=styled(Link)`
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(33, 32, 32, 0.871);
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
`

export const InstaIcon=styled(FaInstagram)`
 width: 100%;
height: 100%;
max-width: 20px;
max-height: 20px;
color: white;
padding: 5px;
`
export const TwitterIcon=styled(FaTwitter)`
width: 100%;
height: 100%;
max-width: 20px;
max-height: 20px;
color: white;
padding: 5px;
`
export const FacebookIcon=styled(FaFacebook)`
width: 100%;
height: 100%;
max-width: 20px;
max-height: 20px;
color: white;
padding:5px;
`
export const HorizantalLine= styled.div`
width: 100%;
height: 100%;
max-width:1400px;
max-height: 3.5px;
background-color: rgba(32, 59, 42, 0.786);
`

export const CopyRight=styled.p`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.2px;
color: #FFFFFF;
padding: 0 30px;
`
