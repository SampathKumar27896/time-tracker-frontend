import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Board from '../components/Board';
import './Default.css';
const MainLayout = () => {
    return(
        <div class="default-grid">
            <div className="top-pane">
                <NavBar/>
            </div>
            <div className="left-top-pane"> 
                left-top
            </div>
            <div className="left-center-pane"> 
                <SideBar/>
            </div>
            <div className="left-bottom-pane"> 
                left-bottom
            </div>
            <div className="right-pane">
                <Board/>
            </div>
        </div>
    )
}

export default MainLayout;