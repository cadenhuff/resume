import React from 'react';
import styled from 'styled-components';



const StyledHeader = styled.header`
    background-color: #f2f2f2;
    padding: 1vh 1vw;
    font-size: calc(10px + 1vw);

    @media screen and (max-width:700px){
        text-align:center;
    }
`;

const StyledHeaderTitle = styled.h1`
    text-align: left;
    
    margin: auto;
    font-size: calc(1px + 3vw);
    color: cadetblue;
    @media screen and (max-width:700px){
        text-align:center;
    }
`;


const StyledSubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: calc(2px + 1.75vw);
    @media screen and (max-width:700px){
        text-align:center;

    }

`;

const StyledLoginButton = styled.button`
    background-color: cadetblue;
    color: white;
    padding: auto;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 10%;
    text-align: center;
    font-size: calc(2px + 1.25vw);
    
    &:hover {
        opacity: 0.8;
      }
    
`;


export default function Header(){
    return(
        <StyledHeader>
            <StyledHeaderTitle>Caden Huffman</StyledHeaderTitle>
            <StyledSubHeader>
                <p>Here is my updated resume as of October 2023.</p>
                <StyledLoginButton onclick = "showLoginBox()">Login</StyledLoginButton> 
            </StyledSubHeader>
        </StyledHeader>
    );

}