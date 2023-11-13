import React from "react";
import LogInBox from "../LogInBox";

export default function Education({logInVisible, logIn, numOfTries}){
    return(
        <main>
            <h2 id = 'main-title'>My Education</h2>
                
            <h3>Boston University</h3>
            <ul>
                <li><i>BS</i> in Computer Science, Expected Graduation May 2025</li>
                <li>3.71 GPA, Dean's List (All Semesters)</li>
            </ul>

            <LogInBox logInVisible={logInVisible} logIn = {logIn}  numOfTries = {numOfTries}/>
        </main>
    );

}