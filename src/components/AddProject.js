import React, {useState, useEffect} from 'react';
import './Project.css';
import {  useNavigate, useParams   } from "react-router-dom";
import InfoBar from './InfoBar';
import Toggle from './Toggle';
import { client } from '../client';
import URL from '../config/api';
import { useSelector, useDispatch } from 'react-redux';
import { resetState, getState, setLoadingState, setSuccessState, setFailedState } from '../features/APIState';
const AddProject = (props) => {
    const componentStatus = useSelector(getState);
    const dispatch = useDispatch();
    const navigateTo = useNavigate ();
    let { id } = useParams();
    const getEmptyObject = () => {
        return {
            projectName: "",
            projectDescription: "",
            isActive: true,
            projectId:-1
        }
    }
    let formInput = getEmptyObject();
    const [formState, setFormState] = useState(formInput);
    useEffect(async() => {
        if(id) {
            try {
                
                dispatch(setLoadingState())
                const result = await client.get(URL.EDIT_PROJECT+id,{});
                console.log(result)
                if(result) {
                    setFormState({...result.data.project})
                }
                dispatch(setSuccessState(result.data.message))
            }catch(error) {
                console.error(error)
                dispatch(setFailedState(error));
            }
        }
        // dispatch(resetState())
    },[])
    
    const handleInputChange = (e) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const handleFormSubmit = async(e) => {
        try {
            e.preventDefault();
            dispatch(setLoadingState())
            const addOrUpdateURL = (id)? URL.UPDATE_PROJECT: URL.ADD_PROJECT;
            const result = await client.post(addOrUpdateURL,formState,{});
            dispatch(setSuccessState(result.data.message))
            redirect();
        }catch(error) {
            console.error(error)
            dispatch(setFailedState(error));
        }
    }
    const onClickCanel = (e) => {
        const emptyObject = getEmptyObject();
        setFormState(emptyObject);
    }
    const redirect = () => {
        setTimeout(() => {
            navigateTo('/project')
        }, 2000)
    }
    const handleCheckbox = (e) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }));
    }
    return (
        <div>   
            <div className="page-header-flex">
                <label className="heading-two page-heading">{(id)?"Update project" : "Add Project"}</label>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="dataForm">
                    <InfoBar state={componentStatus.status} message={componentStatus.message}/>
                    {/* <label className="heading-one form-heading">Sign up</label> */}
                    <label className="heading-two form-heading">Project Name</label>
                    <input type="text" name="projectName" id="projectName" className="" placeholder="Project" onChange={handleInputChange} value={formState.projectName}></input>
                    <label className="heading-two form-heading">Is Active?</label>
                    <Toggle isActive={formState.isActive} handleCheckbox = {handleCheckbox}/>
                    <label className="heading-two form-heading">Project Description</label>
                    <textarea  name="projectDescription" id="projectDescription" className="text-area" placeholder="Description" onChange={handleInputChange} value={formState.projectDescription}></textarea>
                    <div className="dataFormBtns">
                        <span><input type="button"  onClick={(e) => onClickCanel(e)} className="secondary-btn cancel-btn-small" value="Cancel"/></span>
                        <span><input type="submit" className="primary-btn add-btn" value={(id)?"Update":"Add"}/> </span>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddProject;