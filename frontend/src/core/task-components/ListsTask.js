import React, { useState, useEffect, Fragment} from "react";
import { getTasks } from "./apiTask";
import Header from "../common-components/Header";
import ModalDesign from "../common-components/ModalDesign";
import moment from 'moment'
    
const ListsTask= (props) => {

      const [task, setTask] = useState([]);
      
      const loadTasks = () => {
        getTasks(props.match.params.catId).then(data => {
            if(data.error){
                console.log("error");
            }else{
                setTask(data);
            }
        }); 
    };    
     
    useEffect(() => {
            loadTasks();
     }, []);  
    
    const pendingTaskDisplay = () => (
         <div className = "col-md-4">
            <div className = "pending-task task-card">
              <h5>Pending Tasks</h5>
              {task.filter((task) => task.task_status === "-1").map((data) => (
                 <div className = "task-box"> 
                 <p><i class="fa fa-calendar" aria-hidden="true"></i> {moment(data.task_deadline).format("MMM Do YYYY")}</p>
                 <ModalDesign element = "task" title="Edit Task" button="edit-task" id = {data.id}/>
                  <p><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</p>
                 <h6>{data.task_title}</h6>
                 {data.task_level === "0" ? <span class="badge badge-success">Easy</span> : <span class="badge badge-danger">Difficult</span>}
                 </div>  
                ))}
            </div>
         </div>
    );
    
     const progressTaskDisplay = () => (
         <div className = "col-md-4">
         <div className = "progress-task task-card">
          <h5>Progress Tasks</h5>
              {task.filter((task) => task.task_status === "0").map((data) => (
                 <div className = "task-box"> 
                 <p><i class="fa fa-calendar" aria-hidden="true"></i> 15th June 2020</p> 
                 <ModalDesign element = "task" title="Edit Task" button="edit-task" id = {data.id}/>
                  <p><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</p>
                 <h6>{data.task_title}</h6>
                 {data.task_level === "0" ? <span class="badge badge-success">Easy</span> : <span class="badge badge-danger">Difficult</span>}
                 </div>  
                ))}
         </div>
         </div>
    );
    
    const completedTaskDisplay = () => (
         <div className = "col-md-4">
           <div className = "complete-task task-card">
           <h5>Complete Tasks</h5>
              {task.filter((task) => task.task_status === "1").map((data) => (
                 <div className = "task-box"> 
                 <p><i class="fa fa-calendar" aria-hidden="true"></i> 15th June 2020        <p><i class="fa fa-edit" aria-hidden="true"></i> Edit</p>
                  <p><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</p></p>
                 <h6>{data.task_title}</h6>
                 {data.task_level === "0" ? <span class="badge badge-success">Easy</span> : <span class="badge badge-danger">Difficult</span>}
                 </div>  
                ))}
         
           </div>
         </div>
    );

    return(
        <Fragment>
        <Header />
        <div className = "container">
        <div className = "task-section section">
        <ModalDesign element = "task" title="Add Task" button="add-task" id={props.match.params.catId}/>
         <div className = "row">
           {pendingTaskDisplay()}
           {progressTaskDisplay()}
           {completedTaskDisplay()}   
         </div>
        </div>
        </div>
         </Fragment>
    );
}

export default ListsTask;