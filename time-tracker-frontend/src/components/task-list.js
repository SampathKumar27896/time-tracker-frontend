import {useEffect, useState} from 'react';
import TaskAction from './task-actions';
import '../App.css';

function TaskList() {
    const [taskList, updateTaskList] = useState([]);
    const [play, updatePlay] = useState(false)
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
    const handlePlayPause = (e) => {
      updatePlay(!play);
    }
    const startTimer = () => {
      var countDownDate = new Date().getTime();
      var timer = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = now - countDownDate;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(startTimer);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
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
                    <td><TaskAction handlePlayPause={handlePlayPause}/></td>
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