import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import Task from '../components/Task';
import TaskLog from '../components/TaskLog';
import Project from '../components/Project';
import Layout from '../layouts/Default';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getUserFromStorage } from '../features/user/userSlice';

const APIRoute = () => {
    const user = getUserFromStorage(); 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/register" element = { <Register />} />
                <Route path="/login" element = { <Login user={user.data}/>} />
                <Route path="/" element={<Layout user={user.data} />}>
                    <Route path="/task" element = { <Task/>} />
                    <Route path="/taskLog" element = { <TaskLog/>} />
                    <Route path="/project" element = { <Project/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default APIRoute;