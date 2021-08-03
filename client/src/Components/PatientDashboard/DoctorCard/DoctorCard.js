import React , {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { patientProfileApi, sendRequestApi,cancelRequestApi, doctorProfileApi } from '../../../api';
import DocImage from './doccard.png';
import './DoctorCard.css';


const DoctorCard = (props) => {
  const [check,setCheck] = useState(false);

  useEffect(() => {
     handleCheck();
   },[])
  
   const handleCheck = async() =>{
    const pdata = await patientProfileApi();
    // console.log(pdata.profile._id);
    // console.log(props.invitation)
    // console.log(props.invitation.find(x => x === pdata.profile._id ));
    console.log(props);
    if(props.invitation.find(x => x === pdata.profile._id ) ||
    props.appointment.find(x => x===pdata.profile._id))
    {
      setCheck(true);
      console.log("hello");
    }
   }

  const handleSubmit = async () => {
    const data = await sendRequestApi(props.id);
    setCheck(true);
  }

  const handleCancel = async () => {
    const data = await cancelRequestApi(props.id);
    console.log(data);
    setCheck(false);
  }
    return(
      <>
            
        <div className="Card">
          <img 
            src={DocImage}
          />
          <div className="cardtitle">
            <div className="cardTitle">
              {props.name}
            </div>
            <p className="email">{props.email}</p>
            <div className="speciality">
            <div >
              {props.specialization}
            </div>
          </div>
          <button className="btn1" onClick={handleSubmit} disabled={check}>
           {check ? "Requested":"Request for Appointment" }
          </button>
          <button className="btn2" onClick={handleCancel} disabled={!check}>
            Cancel
          </button>
          {/* <ToastContainer autoClose={1000} /> */}
        </div>
      </div>
        </>
    )
}

export default DoctorCard;