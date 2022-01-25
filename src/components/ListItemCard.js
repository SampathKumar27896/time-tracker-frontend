import React, { useEffect } from 'react';
import './ListItemCard.css';
import { IconContext } from "react-icons";
import {  FiEdit2, FiChevronRight } from 'react-icons/fi';
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
     return ( 
         <div class="list-item-card" id={"list-item-card-"+props.item.id}>
            <div id="list-item-card-before" className=""></div>
            <div className="list-item-card-text-flex">
            <label className="heading-two">{props.item.name}</label>
                <p className="content-two">{props.item.description}</p>
            </div>
            <div id={"list-item-card-icon-edit-"+props.item.id} className="list-item-card-icon-edit opacity-none">
                <IconContext.Provider value={{  className: "icon-size-two" }}>
                    <FiEdit2 /> 
                </IconContext.Provider>
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