import React from 'react';
import PrescriptionPatCard from '../PrescriptionPatCard/PrescriptionPatCard'

const PrescriptionPatCardList = ({appointments}) => {
    return(
        <>
            <div className="cardList-container">   
            {appointments.map(patient => (
            <PrescriptionPatCard id={patient._id} name={patient.name} email={patient.email} gender={patient.gender} disease={patient.disease}/>
            ))
        }
        </div>
        </>
    )
}

export default PrescriptionPatCardList;