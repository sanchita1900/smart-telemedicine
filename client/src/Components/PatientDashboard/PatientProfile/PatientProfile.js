import React, { useState ,useEffect} from 'react';
import PateintNavbar from '../PatientNavbar/PatientNavbar';
import { patientProfileApi } from '../../../api';
import { patientProfileUpdateApi } from '../../../api';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


const PatientProfile = () => {
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
    const [formData,setFormData] = useState({});
     
    useEffect(() => {
        profile();
    },[]);
    const updateInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    };

    const profile = async () => {
        const data = (await patientProfileApi()).profile;
        setFormData({...data});
    }

    const saveProfile = (e) => {
        e.preventDefault();
        patientProfileUpdateApi(formData);
        history.push('/patdashboard');
    }
    
    return(
        <>
        <PateintNavbar />
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
            <label>Weight</label>
            <input
                className="input"
                type="int"
                name="weight"
                value={formData.weight}
                placeholder="Weight"
                onChange={updateInput}
            />
            <label>Height</label>
            <input
                className="input"
                type="int"
                name="height"
                value={formData.height}
                placeholder="Height"
                onChange={updateInput}
            />
            <br/>
            <label>Disease</label>
            <input
                className="input"
                type="text"
                name="disease"
                value={formData.disease}
                placeholder="Disease"
                onChange={updateInput}
            />
            <label>Medicine</label>
            <input
                className="input"
                type="text"
                name="medicine"
                value={formData.medicine}
                placeholder="Medicine"
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
    )
}

export default PatientProfile;