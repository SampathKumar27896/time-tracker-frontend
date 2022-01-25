import React, {useEffect} from 'react';
import './SideBar.css';
import { IconContext } from "react-icons";
import { FiList, FiFolder, FiFileText } from 'react-icons/fi';
import { Link } from "react-router-dom";

const SideBar = () => {
    useEffect(() => {
        handleOnlickSidebarItem();
    },[])
    const handleOnlickSidebarItem = async(e, key) => {
        const sideBarItems = document.querySelectorAll(".sidebar-item");
        try {
            if(key)
                localStorage.setItem("selectedSideBarId", "sidebar-item-"+key);
            const selectedItemId = localStorage.getItem("selectedSideBarId");
            if(selectedItemId) {
                sideBarItems.forEach((item) => {
                    if(item.classList.length > 1 && item.id !== selectedItemId) {
                        item.classList.remove("sidebar-item-active");
                        item.querySelector('.marker').classList.remove("display-block");
                     } 
                    else if(item.id === selectedItemId) {
                        item.classList.add("sidebar-item-active");
                        item.querySelector('.marker').classList.add("display-block");
                    }
                })
            } else {
                localStorage.setItem("selectedSideBarId", "sidebar-item-1");
            }
        }catch(error) {
            console.error(error)
        }
    }
    return (
        <div className="sidebar-flex-container">
            <div className="sidebar-item sidebar-item-active" id="sidebar-item-1" >
                <div className="sidebar-flex-child-container" >
                    <div className="marker display-block"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiList /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/task" onClick={(e) => handleOnlickSidebarItem(e, 1)}>Tasks</Link>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-2" >
                <div className="sidebar-flex-child-container" >
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFolder /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/project" onClick={(e) => handleOnlickSidebarItem(e, 2)}>Projects</Link>
                </div>
            </div>
            <div className="sidebar-item" id="sidebar-item-3" >
                <div className="sidebar-flex-child-container" >
                    <div className="marker"></div>
                    <IconContext.Provider value={{  className: "sidebar-icon" }}>
                                <FiFileText /> 
                    </IconContext.Provider>
                    <Link className="sidebar-flex-child-item sidebar-text" to="/tasklog" onClick={(e) => handleOnlickSidebarItem(e, 3)}>Task Logs</Link>
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