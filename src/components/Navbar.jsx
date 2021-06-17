import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalContext } from "../provider/context"

const  Navbar = () => {
    const { openFilterHandler, ToggleDarkMode, darkMode } = useGlobalContext();
    return (
        <div className="nav">
            <Link to="/" onClick={openFilterHandler}><h2>devjobs</h2></Link>
            <div className="toggle">
                <span className="toggle-icon" style={darkMode ? {color: '#ffc107', borderBottom: '2px solid #ffc107'} : {}}><i className="fas fa-sun"></i></span>
                <span className="toggle-icon" onClick={ToggleDarkMode}><i className={`${darkMode ? "fas fa-toggle-on" : "fas fa-toggle-off"}`}></i></span>
                <span className="toggle-icon" style={darkMode ? {} : {color: '#ffc107', borderBottom: '2px solid #ffc107'}}><i className="fas fa-moon"></i></span>
            </div>
        </div>
    )
}

export default Navbar
