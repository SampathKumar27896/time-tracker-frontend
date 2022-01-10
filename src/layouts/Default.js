import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import './Default.css';
import { getUserFromStorage } from '../features/user/userSlice';
import { Outlet } from 'react-router-dom';
const MainLayout = (props) => {
    const user = getUserFromStorage(); 
    return(
            
            <div class="default-grid">
                <div className="top-pane">
                {(user && user.data.isAuthenticated)? <NavBar user={props.user}/>: <></>}
                </div>
                <div className="left-top-pane"> 
                    
                </div>
                <div className="left-center-pane"> 
                {(user && user.data.isAuthenticated)? <SideBar/>: <></>}
                </div>
                <div className="left-bottom-pane"> 
                    
                </div>
                <div className="right-pane">
                    <Outlet/>
                </div>
            </div>
       
        
    )
}

export default MainLayout;