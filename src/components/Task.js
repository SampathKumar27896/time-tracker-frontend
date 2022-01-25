import React from 'react';
import Dropdown from './Dropdown';
import './Task.css';
const Task = () => {
    return (
        <div>
            
            <div className="page-header-flex">
                <label className="heading-two page-heading">Tasks</label>
                <Dropdown name="project"  list={[]}/>
                <Dropdown name="status" list={[]}/>
                <input type="button" id="add-task" class="primary-btn add-btn" value="Add"/>
            </div>
        </div>
    )
}

export default Task;