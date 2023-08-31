import React from 'react'
import {
  MainContainer,
  Wrapper,
  Content,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  Text,
  LoginWith,
  HorizontalRule,
  LinksContainer,
  Social,
  Links,
  ForgotPassword,
} from "../../Style/LoginStyle"
import {LoginData} from "./LoginData"
import Header from '../../components/Header'
const Login = (back) => {
  return (
    <>
    
    <MainContainer>
    <Header back={back}/>
      <Wrapper>
        <Content>
      <WelcomeText>Login to Spotify</WelcomeText>
      <LinksContainer>
      {
        LoginData.map((item)=>{
         return <Social><Links to={item.url} key={item.id}><item.Icon/>{item.text}</Links></Social>
        })
      }
      </LinksContainer>
      <HorizontalRule />
      <InputContainer>
      
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button>Login</Button>
      </ButtonContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
      <HorizontalRule />
      <Text>Don't have an account?</Text>
      <LoginWith> Sign up for Spotify</LoginWith> 
      </Content>
    </Wrapper>
    </MainContainer>
    </>
  )
}

export default Login
