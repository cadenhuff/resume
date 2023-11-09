import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: lightcoral;
`;

const StyledNavUl = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: none;
    margin: auto;
    padding-left: 0;
`;

const StyledLi = styled.li`

    width:90%;
    padding: 2vh 0;
    margin: 1.5vh auto;
    font-size: calc(3px + 3vw);
    background-color: blanchedalmond;
    

`;


export default function Nav(){
    return(
        <StyledNav>
            <StyledNavUl>
                <StyledLi><a href = "/ ">Home</a></StyledLi>
                <StyledLi><a href = "/education">Education</a></StyledLi>
                <StyledLi><a href = "/experience">Experience</a></StyledLi>
                <StyledLi><a href = "/projects">Projects</a></StyledLi>
                <StyledLi><a href = "/skills">Skills</a></StyledLi>
                <StyledLi><a href = "/interests">Interests</a></StyledLi>
            </StyledNavUl>
        </StyledNav>
    );
}
