import React from 'react';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath, Outlet } from 'react-router-dom';


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
    padding: 1.5vh 0;
    margin: 1vh auto;
    font-size: calc(3px + 3vw);
    background-color: blanchedalmond;
    

`;


export default function Nav(){
    return(
        <StyledNav>
            <StyledNavUl>
                <CustomLink to = "">Home</CustomLink>
                <CustomLink to = "education">Education</CustomLink>
                <CustomLink to = "experience">Experience</CustomLink>
                <CustomLink to = "projects">Projects</CustomLink>
                <CustomLink to = "skills">Skills</CustomLink>
                <CustomLink to = "interests">Interests</CustomLink>
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
        fontSize: 'calc(2px + 3vw)',
        padding: '3vw'
        
        
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
