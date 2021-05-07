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
            <th scope="col">Duration</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
           {
               taskList.map((task)=> (
                (<tr  id={"row"+task.id}>
                    <th scope="row">{task.id}</th>
                    <td>{task.task_name}</td>
                    <td>{task.duration}</td>
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