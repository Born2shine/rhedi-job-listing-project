import React from 'react'
import Navbar from "./Navbar"
// import { Link } from "react-router-dom"

const Header = ({children}) => {
    return (
        <header>
            <Navbar/>
            {children}
        </header>
    )
}

export default Header
