import React ,{useState,useEffect} from 'react';
import DoctorNavbar from '../DoctorNavbar/DoctorNavbar';
import { checkInvitationApi } from '../../../api';
import PatientCardList from '../PatientCardList/PatientCardList'

const AppointmentRequest = () => {
     const [patients,setPatientDetails] = useState([]);

     useEffect(() => {
         allInvitations();
     },[])

    const allInvitations = async () => {
        const data = (await checkInvitationApi());
        setPatientDetails(data.arr);
        console.log(data.arr);
    }

    return(
        <>
            <DoctorNavbar />
            <h1>Appointment Requests</h1>
            <PatientCardList patients={patients}/>
        </>
    )
}

export default AppointmentRequest;