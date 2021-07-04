import React from 'react';
import { useState } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
// import Cookies from 'js-cookie';
// import { signinApi } from '../../api';

const DocLogin = () => {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');

  const updateEmail = (e) => {
    setloginEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setloginPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    if (!loginPassword || !loginEmail) {
      toast.dark('Enter Email and Password', {
        position: 'top-right',
        autoClose: 100000,
      });
    } else {
      e.preventDefault();
      <Link to= '/docdashboard'></Link>
      //const data = await signinApi(signinEmail, signinPassword);
    //   if (data.success === true) {
    //     Cookies.set('token', data.token);
    //     history.push('/dashboard');
    //   }
    //   if (data.success === false) {
    //     toast.dark('Wrong Credentials');
    //     setsigninEmail('');
    //     setsigninPassword('');
    //   }
    }
  };

  //if (Cookies.get('token')) return <Redirect to="/dashboard"></Redirect>;

  return (
    <div className="signincontainer">
      <HomeNavbar />
      <div className="Home">
        <div className="main-container">
          <h1 className="signin">LOGIN</h1>
          <div className="container">
            <form>
            <label>Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={loginEmail}
                placeholder="Email"
                onChange={updateEmail}
              />
              <label>Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={loginPassword}
                placeholder="Password"
                onChange={updatePassword}
              />

              <button onClick={handleLogin} className="button" type="submit">
                Submit
              </button>
              <ToastContainer position="top-right" autoClose={1000} />
            </form>
          </div>
        </div>
        <div className="main">
          <p className="text">Don't have an account ? Signup Here!</p>
          <Link to="/docsignup">
            <button className="signup" type="submit">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocLogin;

