import React from 'react';
import './SideBar.css';
import { IconContext } from "react-icons";
import { FiList, FiFolder } from 'react-icons/fi';
import { Link } from "react-router-dom";

const SideBar = () => {
    const handleOnlickSidebarItem = async(e, key) => {
        const sideBarItems = document.querySelectorAll(".sidebar-item");
        // let activeMarker;
        sideBarItems.forEach((item) => {
            if(item.classList.length > 1 && item.id !== "sidebar-item-"+key) {
                item.classList.remove("sidebar-item-active");
                item.querySelector('.marker').classList.remove("display-block");
            } else if(item.id === "sidebar-item-"+key) {
                item.classList.add("sidebar-item-active");
                item.querySelector('.marker').classList.add("display-block");
            }
        })
    }
    return (
        <div className="sidebar-flex-container">
            <div className="sidebar-item sidebar-item-active" id="sidebar-item-1" onClick={(e) => handleOnlickSidebarItem(e, 1)}>
                <div className="sidebar-flex-child-container" >
                    <div className="marker display-block"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiList /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/task">Tasks</Link>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-2" onClick={(e) => handleOnlickSidebarItem(e, 2)}>
                <div className="sidebar-flex-child-container">
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/project">Projects</Link>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-3" onClick={(e) => handleOnlickSidebarItem(e, 3)}>
                <div className="sidebar-flex-child-container">
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/tasklog">Task Logs</Link>
                </div>
            </div>
            {/* <div className="sidebar-item" id="sidebar-item-4" onClick={(e) => handleOnlickSidebarItem(e, 4)}>
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
            </div> */}
        </div>
    )
}

export default SideBar;