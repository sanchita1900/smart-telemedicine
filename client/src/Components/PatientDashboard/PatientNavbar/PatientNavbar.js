import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

const PateintNavbar = ()=> {
    const history = useHistory();
  const signout = () => {
    Cookies.remove('token');
    history.push('/login');
  };
    return(
        <nav className="Navbar">
            <Link to="/patprofile" className="navItems" >Profile</Link>
            <Link to="/patdashboard" className="navItems">Dashboard</Link>
            <Link to="/" className="navItems">Search Doctors</Link>
            <Link to='/login' onClick={signout} className="navItems">Signout </Link>
        </nav>
    );
}

export default PateintNavbar;