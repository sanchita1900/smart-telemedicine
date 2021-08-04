import React from 'react';
import { confirmInvitationApi } from '../../../api';
import "./PatientCard.css"
const PatientCard = (props) => {

    
    const handleSubmit = async () => {
     await confirmInvitationApi(props.id);
        window.location.reload();
    }

    return(
        <>
        <div className="mainPatientCardContainer">
            <div className="imgContainer">
        <img src="https://img.icons8.com/ios-filled/250/000000/hand-with-a-pill.png" height="150px" width="180px"/>
        </div>
            <div className="PatientCard">


            <div className="request">REQUEST</div>
               <p> Name:<span className="Patientname">{props.name}</span></p> 
               <br/>
               <p> Email Id: <span>{props.email}</span></p>
               <br/>
                <p>Suffering From:<span className="PatientDisease">{props.disease}</span></p> 
                <br/>

               <div className="acceptButton">
              
                <button onClick={handleSubmit}>
                    Accept
                </button>
                </div>
                </div>
                </div>
        </>
    )
}

export default PatientCard;
