import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import InfoBar from './InfoBar';
import Pagination from './Pagination';
import NoDataFound from './NoDataFound';
import ListItemCard from './ListItemCard';
import './Project.css';
import {  useNavigate  } from "react-router-dom";
import URL from '../config/api';
import { useSelector, useDispatch } from 'react-redux';
import { client } from '../client';
import {  getState, setLoadingState, setSuccessState, setFailedState } from '../features/APIState';
const Project = () => {
    const componentStatus = useSelector(getState);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const [projects, setProjects] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isActive, setActive] = useState(1);
    const [activeCard, setActiveCard] = useState({});
    const [resetPagination, setResetPagination] = useState(false);
    useEffect ( async() => {
        try {
            let getProjectsURL = URL.GET_PROJECTS+"?offset="+offset+"&isActive="+isActive;
            dispatch(setLoadingState())
            const result = await client.get(getProjectsURL, {});
            setProjects([...result.data.projects])
            setTotalPages(result.data.totalPages);
            setPage(result.data.page);
            setCount(result.data.count);
            setResetPagination(false);
            dispatch(setSuccessState(result.data.message))
        }catch(error) {
            console.error(error)
            dispatch(setFailedState(error));
        }
    },[isActive, offset]);
    useEffect(() => {
        if(projects.length > 0)
            setActiveCard({...projects[0]})
    },[projects])
    const handleProjectDropdownChange = (param) => {
        setActive(param);
        setOffset(0);
        setResetPagination(true);
    }
    const handlePaginationChange = (pageOffset) => {
        setOffset(pageOffset)
    }
    const handleCardClick = (card) => {
        setActiveCard({...card})
    }
    return (
        <div>
            <div className="page-header-flex">
                <label className="heading-two page-heading">Projects</label>
                <Dropdown 
                name="status" 
                list={[{id:1, name:"Active"}, {id:0, name:"Inactive"}]}
                handleDropdownChange = {handleProjectDropdownChange}
                /> 
                <input type="button" id="add-task" class="primary-btn add-btn" value="Add" onClick={ () => {navigateTo("/addProject")}}/>
            </div>
            <InfoBar state={componentStatus.status} message={componentStatus.message}/>
            { (projects.length > 0)?
            <div className="list-container">
                <div className="list-content">
                    <div className="card-list">
                        {
                            projects.map((project, index) => {
                                return (
                                <ListItemCard 
                                key={project.id} 
                                item={project}
                                handleOnClick = {handleCardClick}
                                />)
                            }) 
                        }
                    </div>
                    <Pagination 
                        totalPages={totalPages} 
                        page={page} 
                        count={count}
                        limit = {5} 
                        resetPagination = {resetPagination}
                        handlePaginationChange = {handlePaginationChange}
                    /> 
                </div>
               
                <div className="item-content">
                    <label className="heading-two item-title">{activeCard.name}</label> 
                    <p className="content-two item-description">{activeCard.description}</p> 
                </div> 
                
                
            </div> :  <NoDataFound/> }
            
        </div>
    )
}

export default Project;