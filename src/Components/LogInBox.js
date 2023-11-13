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

export default function LoginBox({isLoggedIn, logInVisible, logIn, numOfTries}){
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');

    
    function onLogInClick(){
        logIn(username, password)
    }


    if (logInVisible){
        return(
            <StyledLogInBox>
                    
                <h2>LogIn</h2>
                
                <input
                    type="username"
                    
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick = {onLogInClick}>Login</button>
                <h3>{4 - numOfTries} Tries Remaining</h3>
                
            </StyledLogInBox>
        
        );
    
    }
    return(
        <>
       
        </>
    );
}