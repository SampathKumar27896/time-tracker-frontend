import React from 'react';
import './SideBar.css';
import { IconContext } from "react-icons";
import { FiHome, FiTrendingUp, FiFolder, FiMessageSquare, FiCalendar } from 'react-icons/fi';

const SideBar = () => {
    const handleOnlickSidebarItem = async(e, key) => {
        const sideBarItems = document.querySelectorAll(".sidebar-item");
        sideBarItems.forEach((item) => {
            item.classList.remove("sidebar-item-active");
        })
        const currentElement = document.getElementById("sidebar-item-"+key);
        currentElement.classList.add("sidebar-item-active")
    }
    return (
        <div className="sidebar-flex-container">
            <div className="sidebar-item sidebar-item-active" id="sidebar-item-1" onClick={(e) => handleOnlickSidebarItem(e, 1)}>
                <div className="sidebar-flex-child-container" >
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiHome /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Overview
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-2" onClick={(e) => handleOnlickSidebarItem(e, 2)}>
                <div className="sidebar-flex-child-container">
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiTrendingUp /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Stats
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-3" onClick={(e) => handleOnlickSidebarItem(e, 3)}>
                <div className="sidebar-flex-child-container">
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Projects
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-4" onClick={(e) => handleOnlickSidebarItem(e, 4)}>
                <div className="sidebar-flex-child-container">
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiMessageSquare /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Chat
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-5" onClick={(e) => handleOnlickSidebarItem(e, 5)}>
                <div className="sidebar-flex-child-container">
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiCalendar /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Calender
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar;