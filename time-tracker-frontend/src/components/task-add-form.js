import '../App.css';
import {useState, useEffect} from 'react';
function TaskAddForm() {
  const [addTaskForm, updateAddTaskForm] = useState({'taskName':'', 'taskStatus': 1})
  const handleOnSubmit = (e) => {
      
    fetch('http://localhost:3001/add_task',{
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }, body:JSON.stringify(addTaskForm)})
              .then(results => results.json())
              .then(data => {
                console.log(data);
              });
  }
  const handleFormChange = (e) => {
    e.preventDefault();
    updateAddTaskForm({...addTaskForm, [e.target.name]: e.target.value});
  }

  return (
    <div className="task-add-form">
    <form onSubmit={(e) => handleOnSubmit(e)}>
        <div class="mb-3">
            <label for="addTask" class="form-label">Task</label>
            <input type="text" class="form-control" id="addTask" aria-describedby="addTask" onChange = {(e) => handleFormChange(e)} name='taskName'/>
        </div>
        <button type="submit"  class="btn btn-primary" id="add-button" name='add-task'>Add</button>
    </form>
    </div>
  );
}

export default TaskAddForm;
