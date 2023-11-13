import React, {useState} from "react";
import ReactDom from "react-dom";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "./Components/Mains/Main.js";
import Education from "./Components/Mains/Education.js";
import Skills from "./Components/Mains/Skills.js";

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
    const[showLogIn, setShowLogIn] = useState(false);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[numOfTries, setNumOfTries] = useState(1);
    
    function toggleLogIn(){
        setShowLogIn(!showLogIn)
    };
    function logIn(username, password){  
        if(username === "" || password === ""){
            alert("Please Enter Complete Username and Password")
            return;
        }    
        if(checkCredentials(username,password)){
            setShowLogIn(false);
            setIsLoggedIn(true);
        }
        else{
            setNumOfTries(numOfTries + 1)
        }
        if(numOfTries === 3){
            window.close()
        }
    }
    function checkCredentials(username, password){
        return username === "caden" && password === "123" ; 

        
    }
    return(
        <>
            <StyledBody>
                <Header onButtonClick = {toggleLogIn}/>
                <StyledNavMain>
                    <Nav isLoggedIn = {isLoggedIn}/>
                    <StyledMain>
                    <Routes>
                        
                        <Route path = "" element = {<Main logInVisible = {showLogIn} logIn = {logIn} numOfTries = {numOfTries}/>} />
                        <Route path = "education" element = {<Education logInVisible = {showLogIn} logIn = {logIn} numOfTries = {numOfTries}/>} />
                        <Route path = "projects" element = {<Projects logInVisible = {showLogIn} logIn = {logIn} numOfTries = {numOfTries}/>} />
                        <Route path = "experience" element = {<Experience logInVisible = {showLogIn} logIn = {logIn} numOfTries = {numOfTries}/>} />
                        <Route path = "interests" element = {<Interests />} />
                        <Route path = "skills" element = {<Skills/>} />
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