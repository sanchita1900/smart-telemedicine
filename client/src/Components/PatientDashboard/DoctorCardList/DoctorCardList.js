import React, { useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import './DoctorCardList.css';

 const  DoctorCardlist = ({doctors}) => {
    //  useEffect(()=>{
    //     console.log(doctors);
    //  })
        return( 
        <>
        <div className="cardList-container">   
        {doctors.map(doctor => (
            <DoctorCard id={doctor._id} name={doctor.name} email={doctor.email} specialization={doctor.specialization} invitation = {doctor.invitation} appointment={doctor.appointment}/>
        ))
        }
        </div>
        </>
        );
};
export default DoctorCardlist;