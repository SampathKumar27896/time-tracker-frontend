import React from 'react';
import './NoDataFound.css';
import { IconContext } from "react-icons";
import {  FiDatabase } from 'react-icons/fi';

const NoDataFound = () => {
    return (
        <div className="no-data-found-content">
             <IconContext.Provider value={{  className: "no-data-found-icon" }}>
                        <FiDatabase /> 
             </IconContext.Provider>
             <label className="content-two">No data found</label>
        </div>
    )
}
export default NoDataFound;