import React from 'react';
import Dropdown from './Dropdown';
import './Task.css';
const Task = () => {
    return (
        <div>
            <label className="heading-one form-heading">Tasks</label>
            <div className="page-header-flex">
                <Dropdown name="project"  list={[]}/>
                <Dropdown name="status" list={[]}/>
                <input type="button" id="add-task" class="primary-btn add-task-btn" value="Add"/>
            </div>
        </div>
    )
}

export default Task;