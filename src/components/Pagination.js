import React, { useState, useEffect, useRef } from 'react';
import './Pagination.css';
import { IconContext } from "react-icons";
import {  FiChevronLeft, FiChevronRight } from 'react-icons/fi';
 const Pagination = (props) => {
     const componentOnLoad = useRef(true); 
     const [counterPage, setCounterPage] = useState(0);
     const handleNextClick = (e) => {
        componentOnLoad.current = false;
         if(counterPage < props.totalPages - 1) {
             console.log("counterPage", counterPage)
             setCounterPage(counterPage+1)
         }
     }
     const handlePrevClick = (e) => {
         if(counterPage >= 1 && counterPage < props.totalPages) {
             setCounterPage(counterPage-1);
         }
     }
     useEffect(() => {
        if(!componentOnLoad.current)
            props.handlePaginationChange(counterPage * props.limit);
     },[counterPage])
     useEffect(() => {
        if(props.resetPagination) {
            setCounterPage(0);
        }
     },[props.resetPagination])
     console.log("counterPage", counterPage, "totalPage",props.totalPages);
     return ( 
         <div class="pagination-flex">
           <label id="pagination-text" className='content-two pagination-flex-item'>Showing page {counterPage + 1} of {props.count} items</label>
           <button type="button"  
           id="pagination-left" 
           className="pagination-flex-item secondary-btn" 
           onClick = {(e) => handlePrevClick(e)}
           >
            <IconContext.Provider value={{  className: "icon-secondary" }}>
                        <FiChevronLeft /> 
                </IconContext.Provider>
           </button>
           <button type="button" 
           id="pagination-right" 
           className="pagination-flex-item secondary-btn"
           onClick={(e) => handleNextClick(e)}
           >
            <IconContext.Provider value={{  className: "icon-secondary" }}>
                <FiChevronRight /> 
            </IconContext.Provider>
           </button>  
         </div>
     )
 }
 
export default Pagination;