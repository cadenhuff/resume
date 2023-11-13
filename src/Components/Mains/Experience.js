import React from "react";
import LogInBox from "../LogInBox";

export default function Experience({logInVisible, logIn, numOfTries}){

    return(
        <main>          
                <h2 id = 'main-title'>My Work Experience</h2>
                <h3>Johnson & Johnson Safety Data Intern</h3>
                <ul>
                    <li>Collaborated with senior engineers to implement a new safety data management system for consumer OTC products.</li>
                    <li>Wrote and debugged clean code that analyzed and processed safety data, providing key insights to cross-functional
                        departments.</li>
                    <li>Created comprehensive documentation for architecture and user guides for product research and development teams.</li>

                </ul>

                <h3>Math and French Tutor</h3>
                <ul>
                    <li>Tutor of three students (ages 7-12) in Brookline area teaching Math and French. </li>
                    <li>Manage time effectively between students and deploy learning strategies to help each student reach their full potential.</li>
                    <li>Increase in GPA among all students; Growth in CERF French level (A1 to B2).</li>
                </ul>
                <LogInBox logInVisible={logInVisible} logIn = {logIn}  numOfTries = {numOfTries}/>

        </main>
    );
}