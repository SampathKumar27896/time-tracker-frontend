import React, { useEffect } from 'react';
import './ListItemCard.css';
import { IconContext } from "react-icons";
import {  FiEdit2, FiChevronRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

 const ListItemCard = (props) => {
     
     useEffect(() => {
        const element = document.getElementById("list-item-card-icon-edit-"+props.item.id);
        const hoverElement = document.getElementById("list-item-card-"+props.item.id);
        hoverElement.addEventListener("mouseover", (event) => {
            element.classList.remove("opacity-none");
        })
        hoverElement.addEventListener("mouseout", (event) => {
            element.classList.add("opacity-none");
        })
        return() => {
            hoverElement.removeEventListener("mouseover", function(event) {
                element.classList.remove("opacity-none"); 
            })
            hoverElement.removeEventListener("mouseout", function(event) {
                element.classList.add("opacity-none"); 
            })
        }  
     },[])
     const handleOnClick = (item) => {
         props.handleOnClick(item);
     }
     return ( 
         <div class="list-item-card" id={"list-item-card-"+props.item.id} onClick={(e) => {handleOnClick(props.item)}}>
            <div className="list-item-card-text-flex">
                <p className="heading-two card-heading">{props.item.name}</p>
                <p className="content-two card-description">{props.item.description}</p>
            </div>
            <div id={"list-item-card-icon-edit-"+props.item.id} className="list-item-card-icon-edit opacity-none">
            <Link className="sidebar-flex-child-item sidebar-text" to={`/project/edit/${props.item.id}`}>
                <IconContext.Provider value={{  className: "icon-size-two" }}>
                    <FiEdit2 /> 
                </IconContext.Provider>
            </Link>
                
            </div>
            <div className="list-item-card-icon-info">
                <IconContext.Provider value={{  className: "icon-secondary" }}>
                    <FiChevronRight /> 
                </IconContext.Provider>
            </div>
         </div>
     )
 }
 
export default ListItemCard;