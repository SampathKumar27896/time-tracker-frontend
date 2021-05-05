import '../App.css';

function TaskAddForm() {
  return (
    <div className="task-add-form">
    <form>
        <div class="mb-3">
            <label for="addTask" class="form-label">Task</label>
            <input type="text" class="form-control" id="addTask" aria-describedby="addTask"/>
        </div>
        <button type="submit" class="btn btn-primary" id="add-button">Add</button>
    </form>
    </div>
  );
}

export default TaskAddForm;
