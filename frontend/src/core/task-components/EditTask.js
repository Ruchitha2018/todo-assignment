import React, { useState, useEffect, Fragment} from "react";
import { getTask, updateTask } from "./apiTask";
import { getCategories } from "../category-components/apiCategory";


const EditTask = (props) => {
    
    const [category, setCategory] = useState([]);
    let taskStatusArray = ["Pending Task", "Progress Task", "Complete Task"];
    let taskLevelArray = ["Easy", "Difficult"];

     const [values, setValues] = useState({
        task_title: "",
        cat_id: props.taskId,
        task_level:"",
        task_status:"-1",
        task_deadline:"",
        formSuccess:false,
        error:""
    });  
     
     const { task_title,cat_id,task_level, task_status,task_deadline, formSuccess, error } = values;
    
    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error){
                console.log("error");
            }else{
                setCategory(data);
            }
        }); 
    };
 
    const initTask = () => {
        getTask(props.taskId).then(data => {
            if(data.error){
                console.log("error");
            }else{
                setValues({...values,task_title:data[0].task_title,cat_id:data[0].cat_id,
                    task_title:data[0].task_title,task_level:data[0].task_level, task_status:data[0].task_status,task_deadline:data[0].task_deadline });
            }
        });
    } 
    
     useEffect(() => {
             loadCategories();
            initTask();
     }, []); 
    
    
    const handleChange = name => event => {
         setValues({ ...values, [name]: event.target.value });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask({task_title,cat_id,task_level, task_status,task_deadline}, props.taskId).then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                setValues({...values,formSuccess:true})
            }
        });
    } 
    
    const successMessage = () => (
      <div className = "alert alert-info" style = {{ display: formSuccess ? "": "none" }}>
        Task had edited successfully
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
            
            <div className = "form-group">                                      
           <label className="text-muted">Move to new category</label>
             <select className="form-control" name = "cat_id" onChange={handleChange("cat_id")}>
                    {category &&
                        category.map((r, i) => (
                 <Fragment>                                                   
                {i == cat_id ? <option selected value = {r.id}>{r.cat_name}</option>:<option  value = {r.id}>{r.cat_name}</option>}
               </Fragment>
                        ))}
                </select>
                </div>
                
            <div className="form-group">    
            <label className="text-muted">Task Status</label>
             <select className="form-control" name = "task_status" onChange={handleChange("task_status")}>
               {taskStatusArray.map((r, i) => (
                <Fragment>                                                                
                {i-1 == task_status ? <option selected value = {i-1}>{r}</option>:<option  value = {i-1}>{r}</option>}
               </Fragment>
               ))}                                                                      
                </select> 
            </div>
                                                                                    
            <div className="form-group">    
            <label className="text-muted">Task Level</label>
             <select className="form-control" name = "task_level" onChange={handleChange("task_level")}>
                 {taskLevelArray.map((r, i) => (
                <Fragment>                                                                
                {i == task_level ? <option selected value = {i}>{r}</option>:<option  value = {i-1}>{r}</option>}
               </Fragment>
               ))}              
                </select> 
            </div>  
                                                                            
                                                                            
            <button className="btn btn-primary" onClick={handleSubmit}>
                Edit Task
            </button>
        </form>
    );

    return(
        <Fragment>
          <div className = "container category-section section">
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

export default EditTask;