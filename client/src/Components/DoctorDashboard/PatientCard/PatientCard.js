import React from 'react';

const PatientCard = (props) => {
    return(
        <>
            <div className="Card">
                {props.name}
                {props.email}
                <button >
                    Accept
                </button>
            </div>
        </>
    )
}

export default PatientCard;
