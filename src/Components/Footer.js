import React from "react";
import styled from "styled-components";


const StyledFooter = styled.footer`
    background-color: lightskyblue;
    padding:1vh 1vw;
`;



export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Caden Huffman</p>
        </StyledFooter>
    );
}