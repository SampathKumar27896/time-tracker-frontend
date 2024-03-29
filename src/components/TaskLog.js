import React from 'react';
import Dropdown from './Dropdown';
import './TaskLog.css';
const TaskLog = () => {
    return (
        <div>
            <div className="page-header-flex">
                <label className="heading-two page-heading">Task Logs</label>
                <Dropdown name="project"  list={[]}/>
                <Dropdown name="task" list={[]}/>
            </div>
        </div>
    )
}

export default TaskLog;