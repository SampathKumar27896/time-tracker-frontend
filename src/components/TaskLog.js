import React from 'react';
import Dropdown from './Dropdown';
import './TaskLog.css';
const TaskLog = () => {
    return (
        <div>
            <div className="tasklog-header-flex">
                <label className="heading-one form-heading">Task Logs</label>
                <Dropdown name="project"  list={[]}/>
                <Dropdown name="task" list={[]}/>
            </div>
        </div>
    )
}

export default TaskLog;