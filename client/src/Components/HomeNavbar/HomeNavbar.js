import React from 'react';
import './HomeNavbar.css';
import { Route, Link } from 'react-router-dom';
import mainlogo from './mainlogo.png';


const HomeNavbar = () => {
        return (
                <>
                <nav className="Navbar">
                        <img src={mainlogo} className="logo" />
                        <Link to="/" className="navItems" >Home</Link>
                        <Link to="/signup" className="navItems">SignUp</Link>
                        <Link to="/login" className="navItems">Login</Link>
                </nav>
                </>
        )
    }


export default HomeNavbar;