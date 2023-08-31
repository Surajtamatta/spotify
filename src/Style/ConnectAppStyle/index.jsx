import styled from "styled-components";
import {FaSpotify} from "react-icons/fa"


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;

`;

export const Wrapper=styled.div`
    width: 100%;
    height:100%;
    max-width: 200px;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const Text=styled.div`
    font-size: 30px;
`;
export const Logo  = styled(FaSpotify) `
    width: 100%;
    height:100%;
    max-width: 50px;
    max-height: 50px;
`;
export const  Button =styled.button`
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
`;