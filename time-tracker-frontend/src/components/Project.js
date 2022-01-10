import React from 'react';
import Dropdown from './Dropdown';
import './Project.css';
const Project = () => {
    return (
        <div>
            <div className="project-header-flex">
                <label className="heading-one form-heading">Projects</label>
                <Dropdown name="status" list={[]}/>
                <input type="button" id="add-task" class="primary-btn add-task-btn" value="Add"/>
            </div>
        </div>
    )
}

export default Project;