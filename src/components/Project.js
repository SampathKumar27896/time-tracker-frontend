import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import InfoBar from './InfoBar';
import Pagination from './Pagination';
import ListItemCard from './ListItemCard';
import './Project.css';
import {  useNavigate  } from "react-router-dom";
import URL from '../config/api';
import { useSelector, useDispatch } from 'react-redux';
import { client } from '../client';
import { resetState, getState, setLoadingState, setSuccessState, setFailedState } from '../features/APIState';
const Project = () => {
    const componentStatus = useSelector(getState);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const [projects, setProjects] = useState([]);
    useEffect ( async() => {
        try {
            dispatch(setLoadingState())
            const result = await client.get(URL.GET_PROJECTS, {});
            setProjects([...result.data.projects])
            dispatch(setSuccessState(result.data.message))
        }catch(error) {
            console.error(error)
            dispatch(setFailedState(error));
        }
    }, []);
    return (
        <div>
            <div className="page-header-flex">
                <label className="heading-two page-heading">Projects</label>
                <Dropdown name="status" list={projects}/>
                <input type="button" id="add-task" class="primary-btn add-btn" value="Add" onClick={ () => {navigateTo("/addProject")}}/>
            </div>
            <InfoBar state={componentStatus.status} message={componentStatus.message}/>
            <div className="card-list">
                {
                    projects.map((project, index) => {
                        return < ListItemCard key = {project.id} item = {project}/>
                    })
                }
            </div>
            <Pagination/>
        </div>
    )
}

export default Project;