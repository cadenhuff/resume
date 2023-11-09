import React from "react";
import ReactDom from "react-dom";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "./Components/Mains/Main.js";
import Education from "./Components/Mains/Education.js";
import Skills from "./Components/Mains/Skills.js";
import Work from "./Components/Mains/Work.js";
import Projects from "./Components/Mains/Projects.js";
import Nav from "./Components/Nav.js";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const StyledNavMain = styled.div`

`;

export function App(){
    console.log(window.location)
    return(
        <>
            <StyledBody>
            <Header />
            <Nav />
            <Routes>
                <Route path = "/" element = {<Main />} />
                <Route path = "/education" element = {<Education />} />
                <Route path = "/skills" element = {<Skills />} />
                <Route path = "/projects" element = {<Projects />} />
                <Route path = "/work" element = {<Work />} />
                <Route path = "/experience" element = {<Education />} />

                
            </Routes>
            <Footer />
            </StyledBody>
            
        </>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(


<BrowserRouter>
    <App/>
</BrowserRouter>

)