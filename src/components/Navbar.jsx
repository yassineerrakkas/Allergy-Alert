import React from 'react'
import '../css/Navbar.css'
import {NavLink} from "react-router-dom"
const Navbar = ()=>{
    
    return(
    <div className='Navbar'>
        <NavLink to="/" className='logo'> <span className='allergy'>Allergy</span> Alert.</NavLink>
        <ul className='hac'>
            <li ><NavLink to = "/"> Home</NavLink></li>
            <li><NavLink to ='about-us'>About Us</NavLink></li>
            <li><NavLink to ='contact-us'>Contact Us</NavLink></li>
        </ul>
        <div className='btns'>
            <div className='btn login'> <NavLink to = 'login'>Log in</NavLink> </div>
            <div className='btn create-account'><NavLink to = 'create-account'>CREATE ACCOUNT</NavLink></div>
            <div className='lng'>| English</div>
        </div>
    </div>);
}
export default Navbar;