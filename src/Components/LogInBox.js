import React, {useState} from "react";
import styled from "styled-components";

const StyledLogInBox = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
    
    

`;

export default function LoginBox({logInVisible}){
    if (logInVisible){
    return(
        <StyledLogInBox>
                   
            <h2>LogIn</h2>
            <input type="text" placeholder="Username" id="username"></input>
            <input type="password" placeholder="Password" id="password"></input>
            <button id="login-button-enter" onclick = "logIn()">Login</button>
            <span id="close-button" class="close-button" onclick="closeLoginBox()">&times;</span>
            <div id = 'num-of-tries'></div>
        </StyledLogInBox>
    
    );
    
    }
    return(
        <>
       
        </>
    );
}