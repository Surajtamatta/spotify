import { styled } from "styled-components"



export const SearchContainer = styled.div`
    display:flex ;
    flex-direction: column;
    justify-content:flex-start;
    background: rgb(1,0,8);
    background: linear-gradient(0deg, rgba(1,0,8,1) 0%, rgba(7,15,24,1) 23%, rgba(16,52,49,0.9697128851540616) 48%, rgba(24,94,71,0.9501050420168067) 64%, rgba(0,255,136,0.8156512605042017) 99%);
    width:100%;
`
export const PlayListWrapper=styled.div`
  padding: 20px 15px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y:scroll;
  &::-webkit-scrollbar{
    width: 3.5px;
    border-radius: 50%;
    right: 2px;
    &-thumb{
    background-color: #000000;
  }
}
`
export const Wrapper=styled.div`
  width: 100%;
  display  :flex ;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 10px;

`
export const SongsContainer=styled.div`
  display  :grid;
  grid-template-columns: repeat(auto-fill,minmax(165px,1fr));
  justify-content:space-evenly;
  justify-items: center;
  gap: 16px;
  width: 100%;
`

export const Browser=styled.div`
   display  :grid;
  grid-template-columns: repeat(auto-fill,minmax(165px,1fr));
  justify-content:space-evenly;
  justify-items: center;
  gap: 16px;
  width: 100%;
`
export const Header=styled.h1`
  font-size: 20px;
    color: #ffffff;
    width: 100%;
    font-weight: 500;
    font-family:Arial, Helvetica, sans-serif;
    text-align:left;
`
export const Template=styled.div`
  width:100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  min-height: 150px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
`
export const Genre=styled.h1`
  font-size: 20px;
    color: ${(props) => props.textColor};
    width: 100%;
    font-weight: 600;
    font-family:Arial, Helvetica, sans-serif;
    text-align:left;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

`