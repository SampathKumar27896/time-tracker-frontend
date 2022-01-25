import React, { useEffect } from 'react';
import './Pagination.css';
import { IconContext } from "react-icons";
import {  FiChevronLeft, FiChevronRight } from 'react-icons/fi';
 const Pagination = (props) => {
     
     return ( 
         <div class="pagination-flex">
           <label id="pagination-text" className='content-two pagination-flex-item'>1-5 of 10</label>
           <button type="button" id="pagination-left" className="secondary-btn pagination-flex-item" disabled>
           <IconContext.Provider value={{  className: "icon-secondary" }}>
                    <FiChevronLeft /> 
                </IconContext.Provider>
           </button>
           <button type="button" id="pagination-right" className="secondary-btn pagination-flex-item">
           <IconContext.Provider value={{  className: "icon-secondary" }}>
                    <FiChevronRight /> 
                </IconContext.Provider>
           </button>  
           
         </div>
     )
 }
 
export default Pagination;