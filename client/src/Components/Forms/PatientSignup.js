import React, { useEffect ,useState} from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import { useHistory , Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Forms.css';
import { patientSignupApi } from '../../api/index';

const PatientSignup = () => {
    const [regName, setName] = useState(null);
    const [regEmail, setRegEmail] = useState(null);
    const [regPassword, setRegPassword] = useState(null);
    const [regAge, setRegAge] = useState(null);
    const [regWeight, setRegWeight] = useState(null);
    const [regGender, setRegGender] = useState(null);
    const history = useHistory();

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateEmail = (e) => {
        setRegEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setRegPassword(e.target.value);
    };

    const updateAge = (e) => {
        setRegAge(e.target.value);
    };

    const updateWeight = (e) => {
        setRegWeight(e.target.value);
    };

    const updateGender = (e) => {
        setRegGender(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!regName || !regEmail || !regPassword ) {
        toast.dark('Input Fields cannot be empty');
        history.push('/patientsignup');
        } else {
         history.push('/patientlogin');
        await patientSignupApi(regName, regEmail, regPassword);
        }
    };
    return (
        <>
        <HomeNavbar />
        <div className="Home">
        <div className="main">
          <h2 className="welcome">Welcome</h2>
        </div>

        <div className="form">
          <h1 className="create">CREATE ACCOUNT</h1>
          <div className="container">
            <form onSubmit={handleRegister}>
                <label>Name</label>
              <input
                className="input"
                type="text"
                name="name"
                value={regName}
                placeholder="Name"
                onChange={updateName}
              />
                <label>Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={regEmail}
                placeholder="Email"
                onChange={updateEmail}
              />
                <label>Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={regPassword}
                placeholder="Password"
                onChange={updatePassword}
              />
                <label>Age</label>
                <input
                className="input"
                type="text"
                name="age"
                value={regAge}
                placeholder="Age"
                onChange={updateAge}
              />
                <label>Weight</label>
                <input
                className="input"
                type="number"
                name="weight"
                value={regWeight}
                placeholder="Weight"
                onChange={updateWeight}
              />
                <label>Gender</label>
                <input
                className="input"
                type="text"
                name="gender"
                value={regGender}
                placeholder="Gender"
                onChange={updateGender}
              />
              <div className="wrap">
                <button className="button" type="submit">
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
  }
  export default PatientSignup;