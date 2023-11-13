import React, {useState} from "react";




export default function Skills({isLoggedIn}){
    if (isLoggedIn){
        return(
            <main>
                
                <ul>
                    <li>Python</li>
                    <li>C++</li>
                </ul>
                <p>UNDER CONSTRUCTION</p>

            </main>
        );
    }
    return(
        <></>
    )
}