import React from "react";
import ReactDom from "react-dom";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Nav from "./Components/Nav.js";
import styled from "styled-components";


const StyledNavHeader = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;
//maybe change this styledbody
const StyledBody = styled.body`
    width: 80%;
    margin: auto;
    font-family: 'Roboto Mono';

`;

export function App(){
    return(
        <>
            <StyledBody>
            <Header />
            <Nav />
            </StyledBody>
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)