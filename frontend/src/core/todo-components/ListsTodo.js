import React, { useState, useEffect, Fragment} from "react";
import { getTodos } from "./apiTodo";

const ListsTodo= (props) => {

      const [todo, setTodo] = useState([]);
      
      const loadTodos = () => {
        getTodos(props.match.params.catId).then(data => {
            if(data.error){
                console.log("error");
            }else{
                setTodo(data);
            }
        }); 
    };    
     
    useEffect(() => {
            loadTodos();
     }, []);  
    
    const pendingTodoDisplay = () => (
         <div className = "col-md-4">
            <div className = "task-card">
              {todo.filter((task) => task.task_status === "0").map((data) => (
                 <h4>{data.task_title}</h4>
                ))}
            </div>
         </div>
    );
    
     const progressTodoDisplay = () => (
         <div className = "col-md-4">
         <div className = "task-card">
          <h5>Inprogress</h5>
          <div className = "task-list">
           <h6>Project One</h6>
          </div>
         </div>
         </div>
    );
    
    const doneTodoDisplay = () => (
         <div className = "col-md-4">
           <div className = "task-card">
           <h5>Done</h5>
         
           </div>
         </div>
    );

    return(
        <div className = "container">
        <div className = "todo-section section">
        <h4>Todos</h4>
         <div className = "row">
           {pendingTodoDisplay()}
           {progressTodoDisplay()}
           {doneTodoDisplay()}
           {JSON.stringify(todo)}
           
         </div>
        </div>
        </div>
    );
}

export default ListsTodo;