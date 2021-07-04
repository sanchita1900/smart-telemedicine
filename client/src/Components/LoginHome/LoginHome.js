import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import { Route, Link } from 'react-router-dom';
import hospital from './hospital.jpg';
import './LoginHome.css';

class LoginHome extends React.Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <div className="Menu">
                    <div className="Home">
                        <img  src={hospital} alt='logo'></img>
                        <button >
                            <Link to="/doclogin" className='btn-1'>
                            Login as Doctor
                            </Link>
                        </button>
                        <button >
                            <Link to="/patientlogin" className='btn-2'>
                            Login as Patient
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default LoginHome;