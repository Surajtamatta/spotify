import styled from "styled-components";
import{Link} from "react-router-dom"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook,BsPhone} from "react-icons/bs"
import {FaApple} from "react-icons/fa"

export const MainContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #141414fb;
`

export const Wrapper=styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;
position: relative;
padding:  10px 0;


`

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  margin:0 10px;
  width:100%;
  max-height: 680px;
  min-width: 300px;
  max-width:550px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
   hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
`


export const WelcomeText = styled.h2`
 /* margin: 1.5rem 0 1rem 0;*/
 height: 100%;
 margin: 0.5rem 0 0.3rem 0;
 max-height: 40px;
 display:flex;
 align-items: center;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  height:100%;
  max-height: 110px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
height: 100%;
max-height: 50px;
 margin: 0.5rem 0 0.8rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text= styled.h5`
  text-align: center;
  color: rgb(255, 255, 255);
`

export const LoginWith = styled.h5`
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  text-transform:capitalize;
  font-family: "Outfit";
  line-height: 20px;
  word-spacing: -2px;
  letter-spacing: 4px;
  text-decoration: underline;
  color: rgb(255, 255, 255);
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 100%;
  max-height:3px;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 0.8rem 0 0.5rem 0;
  backdrop-filter: blur(25px);
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin: 0.3rem 0 0.5rem 0;
  width: 100%;
`;
export const Social = styled.li`
  display: flex;
  border-radius: 50px;
  border: 1px solid #878787;
  justify-content: space-evenly;
  width:100%;
  height: 100%;
  min-height: 40px;
  max-height: 50px;
  max-width: 360px;
`


export const ForgotPassword = styled.h4`
  cursor: pointer;
`


export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 100%;
  max-width: 320px;
  height: 100%;
  min-height: 40px;
  border: none;
  text-indent: 20px;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;




export const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width:100%;
  max-width: 250px;
  height: 100%;
 max-height: 40px;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;


export const Links = styled(Link)`
height: 100%;
width: 100%;
  max-height: 40px;
  max-width:350px;
  padding: 0  5px;
  font-size: 16px;
  text-align:left;
  display: flex;
  gap:10px;
  text-transform:capitalize;
  word-spacing: -2px;
  letter-spacing: 4px;
  justify-content:flex-start;
  align-items: center;
  text-decoration: none;
  font-family: "Outfit";
  border-radius: 4rem;
  color: white;
  cursor: pointer;
`;


export const Google=styled(FcGoogle)`
  max-height: 25px;
  max-width: 25px;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
`
export const Facebook=styled(BsFacebook)`
  max-height: 25px;
  max-width: 25px;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
`
export const Apple=styled(FaApple)`
  max-height: 25px;
  max-width: 25px;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
`
export const Phone=styled(BsPhone)`
  max-height: 25px;
  max-width: 25px;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
`