import React, { useState, useEffect, Fragment} from "react";
import { addCategory } from "./apiCategory";
import Header from "../common-components/Header";

const AddCategory = () => {
    const [values, setValues] = useState({
        cat_name: "",
        cat_desc: "",
        formSuccess:false,
        error:""
    });  
     
     const { cat_name, cat_desc, formSuccess, error } = values;
 
     const handleChange = name => event => {
         setValues({ ...values, [name]: event.target.value });
    }
     
    const handleSubmit = (event) => {
        event.preventDefault();
        addCategory({cat_name, cat_desc}).then(data => {
            console.log(data);
            if(data.error){
                console.log(data.error);
            }else{
                setValues({...values, cat_name:"",cat_desc:"", formSuccess:true})
            }
        })
    } 
    
    const successMessage = () => (
      <div className = "alert alert-info" style = {{ display: formSuccess ? "": "none" }}>
        Category had added successfully
      </div>    
    );
  
    
    const displayForm = () => (
         <form>
            <div className="form-group">
                <label className="text-muted">Category Name</label>
                <input type="cat_name" className="form-control" value={cat_name} onChange={handleChange("cat_name")} />
            </div>

            <div className="form-group">
                <label className="text-muted">Category Description</label>
                <textarea type="cat_desc" className="form-control" value={cat_desc} onChange={handleChange("cat_desc")} />
            </div>                                             
            <button className="btn btn-primary" onClick={handleSubmit}>
                Add Category
            </button>
        </form>
    );

    return(
        <Fragment>
          <Header />
          <div className = "container category-section section">
            <h4>Add Category</h4>
            <div className = "row">
              <div className = "col-md-4 offset-md-4">
                {successMessage()}
                 {displayForm()}
                 {JSON.stringify(values)}
              </div>
            </div>
          </div>
        </Fragment>
    );
}

export default AddCategory;