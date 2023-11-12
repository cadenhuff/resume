import React from 'react';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath, Outlet } from 'react-router-dom';


const StyledNav = styled.nav`
    background-color: lightcoral;
    flex:30%
    flex-wrap:wrap; 
`;

const StyledNavUl = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: none;
    margin: auto;
    padding-left: 0;


    @media screen and (max-width: 700px){
        font-size:10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

    }
    
`;

const StyledLi = styled.li`

    width:90%;
    padding: 1.5vh 0;
    margin: 1vh 1vw;
    font-size: calc(1px + 2vw);
    background-color: blanchedalmond;

    @media screen and (max-width:700px){
        font-size: 10px;
        
        padding: .25% .5%;
        margin: 1% .5%;
    }
    

`;


export default function Nav(){
    return(
        <StyledNav>
            <StyledNavUl>
                
                <StyledLi><CustomLink to = "">Home</CustomLink></StyledLi>
                <StyledLi><CustomLink to = "education">Education</CustomLink></StyledLi>
                <StyledLi> <CustomLink to = "experience">Experience</CustomLink></StyledLi>
                <StyledLi><CustomLink to = "projects">Projects</CustomLink></StyledLi>
                <StyledLi><CustomLink to = "skills">Skills</CustomLink></StyledLi>
                <StyledLi><CustomLink to = "interests">Interests</CustomLink></StyledLi>
            </StyledNavUl>
        </StyledNav>
    );
}


function CustomLink({ to, children }) {
    //Can't I just use reolvePath.pathname for 
    const resolvePath = useResolvedPath(to);
    //console.log(resolvePath)
    const isActive = useMatch({ path: resolvePath.pathname, end: true });

    const linkStyles = {
        textDecoration: 'none',
        color: 'black',
        
        
        
    };

    return (
        <StyledLi className={isActive ? 'active' : ''}>

            <Link to={resolvePath.pathname} style={linkStyles}>
                {children}
            </Link>
            {/*
            <Link to={to} style={linkStyles}>
                {children}
            </Link>
            */}
        </StyledLi>
    );
}
