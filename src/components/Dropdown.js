import React from 'react';
import './Dropdown.css';
import { IconContext } from "react-icons";
import {  FiChevronDown } from 'react-icons/fi';
const Dropdown = (props) => {
    const handleSelect = (e) => {
        document.getElementById("dropdown-"+props.name).classList.toggle("display-block");
        document.getElementById("dropdown-flex-"+props.name).classList.toggle("shadow-none");
    }
    const handleFocusOut = () => {
        document.getElementById("dropdown-"+props.name).classList.remove("display-block");
        document.getElementById("dropdown-flex-"+props.name).classList.remove("shadow-none");
    }
    const handleOnChange = (e,id,model) => {
       document.getElementById("selected-item"+props.name).innerHTML = model;
       
       handleFocusOut();
    }
    return (
        <div className="select-container"  tabIndex = "0" onBlur={handleFocusOut}>
            <div className="dropdown-flex" id={"dropdown-flex-"+props.name} onClick={(e) => handleSelect(e)}>
                <div className="selected-item" id={"selected-item"+props.name}>
                    {props.name}
                </div> 
                <IconContext.Provider value={{  className: "icon-secondary" }}>
                    <FiChevronDown /> 
                </IconContext.Provider>
            </div>
            <ul name={"dropdown-"+props.name} id={"dropdown-"+props.name} className="dropdown">
                {
                    props.list.map((item, index) => {
                        return <li key={item.id} id={item.id} value={item.name} onClick={(e)=>handleOnChange(e,item.id,item.name)}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Dropdown;