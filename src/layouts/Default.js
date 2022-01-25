import React, {useEffect} from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import './Default.css';
import { Outlet } from 'react-router-dom';
const MainLayout = (props) => {
    
    useEffect(() => {
        if(!props.user || !props.user.isAuthenticated)
            window.location = "/login";
    },[props.user])
    return(
            
            <div class="default-grid">
                <div className="top-pane">
                {(props.user && props.user.isAuthenticated)? <NavBar user={props.user}/>: <></>}
                </div>
                <div className="left-top-pane"> 
                    
                </div>
                <div className="left-center-pane"> 
                {(props.user && props.user.isAuthenticated)? <SideBar/>: <></>}
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