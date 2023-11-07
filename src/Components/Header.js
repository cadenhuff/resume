import React from 'react';
import styled from 'styled-components';



const StyledHeader = styled.header`
    background-color: #f2f2f2;
    padding: 1vh 1vw;
    font-size: calc(10px + 1vw);

`;

const StyledHeaderTitle = styled.h1`
    text-align: left;
    
    margin: auto;
    font-size: calc(1px + 3vw);
    color: cadetblue;
`;


const StyledSubHeader = styled.div`
    display: flex;
    justify-content: space-between;

`;

const StyledLoginButton = styled.button`
    background-color: cadetblue;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 6%;

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