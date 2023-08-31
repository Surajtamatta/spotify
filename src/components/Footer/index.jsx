import React from 'react'
import { Company,Communities,UsefullLinks,SocialIcon } from './FooterData'
import {
  FooterContainer,
  Wrapper,
  ContainerOne,
  ContainerTwo,
  Companylinks,
  CommunitiesLinks,
  UseLinks,
  Links,
  SocialContact,
  SocialLinks,
  CopyRight,

} from "../../Style/FooterStyle"

const Footer = () => {
  return (
 
    <FooterContainer>

      <Wrapper>
        <ContainerOne>
                <Companylinks>
                        {Company.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </Companylinks>
                <CommunitiesLinks>
                        {Communities.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </CommunitiesLinks>
                <UseLinks>
                        {UsefullLinks.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </UseLinks>       
        </ContainerOne>
        <ContainerTwo>
          <SocialContact>
                        {SocialIcon.map((item)=>{
                            return(
                              <SocialLinks  key={item.id} to={item.Url} ><item.Icon/></SocialLinks>
                          )})}
          </SocialContact>
        </ContainerTwo>
        </Wrapper>
      
        <CopyRight>@copyright. play 2022</CopyRight>
    </FooterContainer>
  )
}

export default Footer
