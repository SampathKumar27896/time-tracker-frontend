import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Register from '../components/Register';
import Login from '../components/Login';
import './Default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
const MainLayout = () => {
    return(
        <BrowserRouter>
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
                    <Routes>
                        <Route path="/register" element = { <Register />} />
                        <Route path="/login" element = { <Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        
    )
}

export default MainLayout;