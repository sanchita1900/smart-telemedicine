import React, { useState, useEffect } from "react";
import DoctorNavbar from "../DoctorNavbar/DoctorNavbar";
import { doctorProfileApi } from "../../../api";
import { doctorProfileUpdateApi } from "../../../api";
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const history = useHistory();
  // const [name,setName] = useState();
  // const [email,setEmail] = useState();
  // const [password,setPassword] = useState();
  // const [state,setState] = useState();
  // const [city,setCity] = useState();
  // const [gender,setGender] = useState();
  // const [age,setAge] = useState();
  // const [contact,setContact] = useState();
  // const [weight,setWeight] = useState();
  // const [height,setHeight] = useState();
  // const [disease,setDisease] = useState();
  // const [medicine,setMedicine] = useState();
  // const [about,setAbout] = useState();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    profile();
  }, []);
  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const profile = async () => {
    const data = (await doctorProfileApi()).profile;
    setFormData({ ...data });
  };

  const saveProfile = (e) => {
    e.preventDefault();
    doctorProfileUpdateApi(formData);
    history.push("/docdashboard");
  };

  return (
    <>
      <DoctorNavbar />
      <div>
        <h1>YOUR PROFILE</h1>
      </div>
      <form onSubmit={saveProfile}>
        <label>Name</label>
        <input
          className="input"
          type="text"
          name="name"
          value={formData.name}
          disabled={true}
        />
        <label>Email</label>
        <input
          className="input"
          type="text"
          name="email"
          value={formData.email}
          disabled={true}
        />
        <label>State</label>
        <input
          className="input"
          type="text"
          name="state"
          value={formData.state}
          placeholder="State"
          onChange={updateInput}
        />
        <label>City</label>
        <input
          className="input"
          type="text"
          name="city"
          value={formData.city}
          placeholder="City"
          onChange={updateInput}
        />
        <label>Gender</label>
        <input
          className="input"
          type="text"
          name="gender"
          value={formData.gender}
          placeholder="Gender"
          onChange={updateInput}
        />
        <label>Age</label>
        <input
          className="input"
          type="int"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={updateInput}
        />
        <label>Contact</label>
        <input
          className="input"
          type="int"
          name="contact"
          value={formData.contact}
          placeholder="Contact"
          onChange={updateInput}
        />
        <label>University</label>
        <input
          className="input"
          type="text"
          name="university"
          value={formData.university}
          placeholder="University"
          onChange={updateInput}
        />
        <label>Specialization</label>
        <input
          className="input"
          type="text"
          name="specialization"
          value={formData.specialization}
          placeholder="Specialization"
          onChange={updateInput}
        />
        <br />
        <label>Honors</label>
        <input
          className="input"
          type="text"
          name="honors"
          value={formData.honors}
          placeholder="Honors"
          onChange={updateInput}
        />
        <label>Years of Experience</label>
        <input
          className="input"
          type="int"
          name="yearOfExp"
          value={formData.yearOfExp}
          placeholder="Years of Experience"
          onChange={updateInput}
        />
        <label>About</label>
        <input
          className="input"
          type="text"
          name="about"
          value={formData.about}
          placeholder="About"
          onChange={updateInput}
        />
        <button className="button" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default DoctorProfile;
