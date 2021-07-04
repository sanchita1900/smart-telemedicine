import React from 'react';
import {Link} from 'react-router-dom';

const PateintNavbar = ()=> {
    return(
        <nav className="Navbar">
            <Link to="/" className="navItems" >Profile</Link>
            <Link to="/" className="navItems">Dashboard</Link>
            <Link to="/" className="navItems">Search Doctors</Link>
            <Link to='/login' className="navItems">Signout </Link>

        </nav>
    );
}

export default PateintNavbar;