import React from 'react';
import './HomeNavbar.css';
import { Route, Link } from 'react-router-dom';



const HomeNavbar = () => {
        return (
                <nav className="Navbar">
                            <Link to="/" className="navItems" >Home</Link>
                            <Link to="/signup" className="navItems">SignUp</Link>
                            <Link to="/login" className="navItems">Login</Link>
                </nav>

        )
    }


export default HomeNavbar;