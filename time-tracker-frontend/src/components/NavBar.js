import React from 'react';
import './NavBar.css';
import { IconContext } from "react-icons";
import {FiSearch, FiHelpCircle, FiBell, FiUser} from "react-icons/fi";

const NavBar = (props) => {
    return (
        <div>
           <div className="nav-flex-container">
               {/* <div className="nav-flex-child-container">
                    <div className="nav-flex">
                        <input type="text" placeholder="search" className="search-box" id="search-box"/>
                    </div>
                    <div className="nav-flex">
                        <IconContext.Provider value={{  className: "searchbar-icon" }}>
                            <FiSearch />
                        </IconContext.Provider>
                    </div>
                    
               </div> */}
               <div className="nav-flex-child-container2">
                    {/* <div className="nav-flex">
                        <IconContext.Provider value={{  className: "help-icon" }}>
                            <FiHelpCircle />
                        </IconContext.Provider>
                    </div>
                    <div className="nav-flex">
                        <IconContext.Provider value={{  className: "bell-icon" }}>
                            <FiBell />
                        </IconContext.Provider>
                    </div> 
                    <div className="nav-flex">
                        <select name="cars" id="cars" className="profile-select">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div> */}
                    <div className="nav-flex">
                        <IconContext.Provider value={{  className: "profile-icon" }}>
                            <FiUser />
                        </IconContext.Provider>
                    </div> 
                    <div className="nav-flex">
                        <p>{(props.user.userName)?props.user.userName:""}</p>
                    </div>
               </div>
           </div>
        </div>
    );
}
export default NavBar;