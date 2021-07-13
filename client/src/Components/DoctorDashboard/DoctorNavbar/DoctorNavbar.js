import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

const DoctorNavbar = ()=> {
    const history = useHistory();
  const signout = () => {
    Cookies.remove('token');
    history.push('/login');
  };
    return(
        <nav className="Navbar">
            <Link to="/docprofile" className="navItems" >Profile</Link>
            <Link to="/docdashboard" className="navItems">Dashboard</Link>
            <Link to='/login' onClick={signout} className="navItems">Signout </Link>
        </nav>
    );
}

export default DoctorNavbar;