import React, { Component } from 'react';
import './HomePage.css';
import { Redirect } from 'react-router';
import logo from './steth.png';
import HomeNavbar from '../HomeNavbar/HomeNavbar'
//import Cards from './Cards';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }
    render() {
        let redirect = null;
        if (this.state.redirect) {
            redirect = <Redirect to="signup" />
        }
        return (
            <div className="Page">
                <HomeNavbar />
                <div className="Menu">
                    <div className="Home-content">
                        <img className='logo' src={logo} alt='logo'></img>
                        <div className="Lines">
                            <h1>Just a small initiative where patients can anytime connect with Doctors!</h1>
                            <p>
                                Let's make a community of patients from every part of world and panel of best Doctors.
                            </p>
                            <h2>You are just one click away!!</h2>
                            <button onClick={() => this.setState({ redirect: true })}>SignUp now</button>
                            {redirect}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;