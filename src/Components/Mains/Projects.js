import React, {useState} from "react";



export default function Projects(){
    return(
        <main>
            <h1 id = "main-title">Projects</h1>
            <h2>J&J Product Dictionary Data Analysis</h2>
            <ul>
                <li>Leveraged Pandas to efficiently collect, centralize, and manipulate vast datasets from multiple databases, enabling
                seamless access to critical company data. </li>
                <li>Conducted comprehensive data processing, yielding key insights that contributed to product research and development.</li>
                <li>Implemented graph theory techniques, resulting in an 60% increase in data collection and processing efficiency,
                optimizing workflows and saving valuable time and resources.</li>
                <li>Effectively communicated findings and analysis to senior leadership through clear and concise presentations, influencing
                strategic decision-making and fostering data-driven actions.</li>
            </ul>
            <h2>Food Tinder</h2>
            <ul>
                <li>Built dating app for restaurants, user inputs restaurant requirements and program provides restaurants that the user
                “swipes right” or “swipes left” on. Program takes user responses and gives the user its final restaurant recommendation.</li>
                <li>Created a single-page application interface with Kivy. </li>
                <li>Utilized Yelp API to obtain restaurant data and filtered data based on user input.</li>
            </ul>
        </main>
    );
}