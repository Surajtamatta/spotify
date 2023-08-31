import { styled } from "styled-components";


export const Container =styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #13685ef5;
max-height: 90px;
z-index: 5;

@media (max-width:600px){
     position:absolute;
     bottom: 64px;
     max-height: 150px;
   }
`