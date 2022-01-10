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
                <IconContext.Provider value={{  className: "down-arrow-icon" }}>
                    <FiChevronDown /> 
                </IconContext.Provider>
            </div>
            <ul name={"dropdown-"+props.name} id={"dropdown-"+props.name} className="dropdown">
                <li id="1" value="volvo" onClick={(e)=>handleOnChange(e,1,"volvo")}>Volvo</li>
                <li id="2" value="saab" onClick={(e)=>handleOnChange(e,1,"saab")}>Saab</li>
                <li id="3" value="This is some kind of big project you can't see" onClick={(e)=>handleOnChange(e,1,"This is some kind of big project you can't see")}>This is some kind of big project you can't see</li>
                <li id="4" value="audi" onClick={(e)=>handleOnChange(e,1,"audi")}>Audi</li>
            </ul>
        </div>
    )
}
export default Dropdown;