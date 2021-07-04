import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import { Route, Link } from 'react-router-dom';
import hospital from './hospital.jpg';
import './SignupHome.css';

class SignupHome extends React.Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <div className="Menu">
                    <div className="Home">
                        <img  src={hospital} alt='logo'></img>
                        <button >
                            <Link to="/docsignup" className='btn-1'>
                            Signup as Doctor
                            </Link>
                        </button>
                        <button >
                            <Link to="/patientsignup" className='btn-2'>
                            Signup as Patient
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default SignupHome;