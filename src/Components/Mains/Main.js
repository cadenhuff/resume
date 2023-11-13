import React, {useState} from "react";
import styled from 'styled-components';
import profileImage from "../../media/Me.jpeg";
import LogInBox from '../LogInBox';
//
//For the different main pages, we could use conditional rendering or could also use props?
//

const StyledContentImage = styled.div`
    flex-direction: row;
    display: flex; 
    padding: 1vh 2vw; 


    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;


const StyledImage = styled.img`

    width: 35%;
    height: auto;
    margin-right:5% ;

    @media screen and (max-width:700px){
        margin: 1vh auto;
    }
    

`;





export default function Main({isLoggedIn, logInVisible, logIn, numOfTries}){
    return(
        <main>
            <h1>Main</h1>
            <StyledContentImage>
                <StyledImage src = {profileImage} alt = "Picture of Me"></StyledImage>
                
                <p>Hi! My name is Caden Huffman. I am currently a Junior studying computer science at Boston University.
                In my free time, I like to run and will hopefully be running my first marathon this year. 
                </p>
            </StyledContentImage>
            <p>This is my website where you can find my education, work experience, and my projects</p>
            
            
           <LogInBox isLoggedIn = {isLoggedIn} logInVisible={logInVisible} logIn = {logIn}  numOfTries = {numOfTries}/>
              
        </main>


    );
}


