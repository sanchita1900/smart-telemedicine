import React from 'react';

const PrescriptionPatCard = (props) => {


    return(
        <>
            <div className="Card">
                Hi I am {props.name}, email id is {props.email}. 
                I am sufferring from {props.disease}. Kindly accept my appointment request.
                <button >
                    Prescribe
                </button>
            </div>
        </>
    )
}

export default PrescriptionPatCard;
