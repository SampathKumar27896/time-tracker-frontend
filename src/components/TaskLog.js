import React from 'react';
import Dropdown from './Dropdown';
import './TaskLog.css';
const TaskLog = () => {
    return (
        <div>
            <label className="heading-one form-heading">Task Logs</label>
            <div className="page-header-flex">
                <Dropdown name="project"  list={[]}/>
                <Dropdown name="task" list={[]}/>
            </div>
        </div>
    )
}

export default TaskLog;