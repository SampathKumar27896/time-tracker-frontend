import React from 'react';
import Dropdown from './Dropdown';
import './Project.css';
const Project = () => {
    return (
        <div>
            <label className="heading-one form-heading">Projects</label>
            <div className="page-header-flex">
                <Dropdown name="status" list={[]}/>
                <input type="button" id="add-task" class="primary-btn add-task-btn" value="Add"/>
            </div>
        </div>
    )
}

export default Project;