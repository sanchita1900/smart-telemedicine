import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SignupHome from './Components/SignupHome/SignupHome';
import LoginHome from './Components/LoginHome/LoginHome';
import PatientSignup from './Components/Forms/PatientSignup';
import DocSignup from './Components/Forms/DocSignup';
import PatientLogin from './Components/Forms/PatientLogin';
import DocLogin from './Components/Forms/DocLogin';
import PatientLanding from './Components/PatientDashboard/PatientLanding/PatientLanding';
import PatientProfile from './Components/PatientDashboard/PatientProfile/PatientProfile';
import DoctorLanding from './Components/DoctorDashboard/DoctorLanding/DoctorLanding';
import DoctorProfile from './Components/DoctorDashboard/DoctorProfile/DoctorProfile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () =>  {
    return (
      <Router>
        <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route exact path="/signup" >
          <SignupHome />
        </Route>
        <Route path="/docsignup" exact>
          <DocSignup />
        </Route>
        <Route
          path="/patientsignup"
          exact>
          <PatientSignup />
        </Route>
        <Route path="/login" exact>
          <LoginHome />
        </Route>
        <Route path="/doclogin" exact>
          <DocLogin />
        </Route>
        <Route
          path="/patientlogin"
          exact>
          <PatientLogin />
          </Route>
          <Route
          path="/patdashboard"
          exact>
          <PatientLanding />
          </Route>
          <Route
          path="/patprofile"
          exact>
          <PatientProfile />
          </Route>
          <Route
          path="/docdashboard"
          exact>
          <DoctorLanding />
          </Route>
          <Route
          path="/docprofile"
          exact>
          <DoctorProfile />
          </Route>
        </Switch>
      </Router>
    )
  }

export default App;
