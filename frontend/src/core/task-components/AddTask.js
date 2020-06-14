import React, { useState, useEffect, Fragment} from "react";
import { addTask } from "./apiTask";

const AddTask = (props) => {
    
    const [values, setValues] = useState({
        task_title: "",
        cat_id: props.categoryId,
        task_level:"",
        task_status:"-1",
        task_deadline:"",
        formSuccess:false,
        error:""
    });  
     
     const { task_title,cat_id,task_level, task_status,task_deadline, formSuccess, error } = values;
    
    
    useEffect(() => {
     }, []);  
 
     const handleChange = name => event => {
         setValues({ ...values, [name]: event.target.value });
    }
     
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask({task_title,cat_id,task_level,task_status,task_deadline}).then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                setValues({...values, task_title:"",cat_id:props.categoryId,task_level:"", task_status:"",task_deadline:"", formSuccess:true})
            }
        })
    } 
    
    const successMessage = () => (
      <div className = "alert alert-info" style = {{ display: formSuccess ? "": "none" }}>
        Task had added successfully
      </div>    
    );
   
    const displayForm = () => (
         <form>
            <div className="form-group">
                <label className="text-muted">Task Title</label>
                <input type="task_title" className="form-control" value={task_title} onChange={handleChange("task_title")} />
            </div>
    
            <div className="form-group">
                <label className="text-muted">Deadline</label>
                <input type="date" className="form-control" value={task_deadline} onChange={handleChange("task_deadline")} />
            </div>
                
            <div className="form-group">    
            <label className="text-muted">Task Level</label>
             <select className="form-control" name = "task_level" onChange={handleChange("task_level")}>
                 <option value = "-1">Please Select</option>              
                 <option value = "0">Easy</option>              
                 <option value = "1">Difficult</option>              
                </select> 
            </div>                                                                                                                                 
            <button className="btn btn-primary" onClick={handleSubmit}>
                Add Task
            </button>
        </form>
    );

    return(
        <Fragment>
          <div className = "container task-section section">
            <div className = "row">
              <div className = "col-md-12">
                {successMessage()}
                 {displayForm()}
              </div>
            </div>
          </div>
        </Fragment>
    );
}

export default AddTask;