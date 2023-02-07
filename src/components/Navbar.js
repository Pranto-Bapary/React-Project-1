import React from "react"
import logo from "../images/logo.png"
function Navbar(){
    return(
        <nav className ="navbar">
            <div className="nav-left">
                <img src={logo} className="nav-logo"/>
                <h3 className="nav-title">ReactFacts</h3>
            </div>
            <div className="nav-right">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar