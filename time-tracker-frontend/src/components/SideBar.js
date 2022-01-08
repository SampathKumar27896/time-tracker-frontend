import React from 'react';
import './SideBar.css';
import { IconContext } from "react-icons";
import { FiList, FiTrendingUp, FiFolder, FiMessageSquare, FiCalendar } from 'react-icons/fi';

const SideBar = () => {
    const handleOnlickSidebarItem = async(e, key) => {
        const sideBarItems = document.querySelectorAll(".sidebar-item");
        // let activeMarker;
        sideBarItems.forEach((item) => {
            if(item.classList.length > 1) {
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
                    <a herf="#" className="sidebar-flex-child-item">
                        Task
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-2" onClick={(e) => handleOnlickSidebarItem(e, 2)}>
                <div className="sidebar-flex-child-container">
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        Projects
                    </a>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-3" onClick={(e) => handleOnlickSidebarItem(e, 3)}>
                <div className="sidebar-flex-child-container">
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <a herf="#" className="sidebar-flex-child-item">
                        TaskLog
                    </a>
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