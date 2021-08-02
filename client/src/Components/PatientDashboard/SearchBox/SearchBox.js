import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './SearchBox.css';

const SearchBox = ({handleChange}) => {
    return(
        <>
        <div className="container">
            <input
            className='search'
            type='search'
            placeholder="Search for doctors"
            onChange={handleChange}
            
        />
        <div className="dropdown">
                <DropdownButton id="dropdown-button" title="All">
                    {/* <Dropdown.Item href="#/action-1">Gastrologist</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Neurologist</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Medicine Spec.</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Cardiologist</Dropdown.Item> */}
                </DropdownButton>
            </div>
        </div>
        </>
    )
}

export default SearchBox;