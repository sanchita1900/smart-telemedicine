import React from 'react';
import PatientCard  from '../PatientCard/PatientCard';

const PatientCardList = (patients) => {
    return(
        <>
            <div className="cardList-container">   
            {patients.patients.map(patient => (
            <PatientCard id={patient._id} name={patient.name} email={patient.email} gender={patient.gender} disease={patient.disease}/>
            ))
        }
        </div>
        </>
    )
}

export default PatientCardList;