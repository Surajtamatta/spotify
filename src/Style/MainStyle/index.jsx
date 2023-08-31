import styled from "styled-components";

export const Container =styled.div`
width: 100%;
height:100vh;
display:flex;
flex-direction:column;
position: relative;

`
export const Wrapper =styled.div`
width: 100%;
height:${props=>props.showPlayer ? '90vh' :'100%'};
display: flex;
flex-direction:row;

@media (max-width:766px) and (min-width:600px) {
    height:${props=>props.showPlayer ? '85vh' :'100%'};
}
`