import React, {useState} from "react";
import ReactDom from "react-dom";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "./Components/Mains/Main.js";
import Education from "./Components/Mains/Education.js";
import Skills from "./Components/Mains/Skills.js";
import Work from "./Components/Mains/Work.js";
import Projects from "./Components/Mains/Projects.js";
import Experience from "./Components/Mains/Experience.js";
import Interests from "./Components/Mains/Interests.js";
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
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width:700px){

        display: flex;
        flex-direction: column;
        position: relative;

    }
`;

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    background-color: linen;
    padding: 2vh 2vw;
    flex: 70%;

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center; 
    }    

`;


export function App(){
    const[showLogIn, setShowLogIn] = useState(true)
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    function toggleLogIn(){
        setShowLogIn(!showLogIn);
    };

    function LogIn(){
        setIsLoggedIn(!isLoggedIn);
    };
    return(
        <>
            <StyledBody>
                <Header onButtonClick = {toggleLogIn}/>
                <StyledNavMain>
                    <Nav />
                    <StyledMain>
                    <Routes>
                        
                        <Route path = "" element = {<Main logInVisible = {showLogIn}/>} />
                        <Route path = "education" element = {<Education logInVisible = {showLogIn}/>} />
                        <Route path = "skills" element = {<Skills />} />
                        <Route path = "projects" element = {<Projects logInVisible = {showLogIn}/>} />
                        <Route path = "work" element = {<Work logInVisible = {showLogIn}/>} />
                        <Route path = "experience" element = {<Experience logInVisible = {showLogIn}/>} />
                        <Route path = "interests" element = {<Interests />} />
                    </Routes>

                    </StyledMain>
                </StyledNavMain>
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