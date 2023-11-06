import React from "react";
import ReactDom from "react-dom/client"
import Footer from "./Components/Footer.js"
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Nav from "./Components/Nav.js"


export function App(){
    return(
        <>
            <Nav />
            <Footer />
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)