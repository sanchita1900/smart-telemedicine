import React from 'react';

const PrescriptionDocCard = (props) => {


    return(
        <>
            <div className="Card">
                Dr.{props.name}, email id is {props.email}. 
                <button >
                    Send Problem
                </button>
            </div>
        </>
    )
}

export default PrescriptionDocCard;
