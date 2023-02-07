import React from "react"
import MainBody from "./components/MainBody"
import Navbar from "./components/Navbar"

function App(){
    return(
        <div className="container">
            <Navbar />
            <MainBody />
        </div>
    )
}

export default App