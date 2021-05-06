import {useEffect, useState} from 'react';
import TaskAction from './task-actions';
import '../App.css';

function TaskList() {
    const [taskList, updateTaskList] = useState([]);

    useEffect(() => {
        
            fetch('http://localhost:3001/list_tasks',{
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "text/plain"
                }})
              .then(results => results.json())
              .then(data => {
                updateTaskList([...data.data]);
              });
    },[])

  return (
    <div className="task-list">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Task name</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
           {
               taskList.map((task)=> (
                (<tr>
                    <th scope="row" id={"row"+task.id}>{task.id}</th>
                    <td>{task.task_name}</td>
                    <td><TaskAction/></td>
                    </tr>
                )
               ))
           }
        </tbody>
        </table>
    </div>
  );
}

export default TaskList;