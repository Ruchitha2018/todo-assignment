import React, { useState, useEffect, Fragment} from "react";
import { updateCategory, getCategory } from "./apiCategory";
import Header from "../common-components/Header";

const EditCategory = (props) => {
    
    const [values, setValues] = useState({
        cat_name: "",
        cat_desc: "",
        formSuccess:false,
        error:""
});  
     
    const { cat_name, cat_desc, formSuccess, error } = values;
 
    const initCategory = () => {
        getCategory(props.categoryId).then(data => {
            if(data.error){
                console.log("error");
            }else{
                setValues({...values, cat_name:data[0].cat_name, cat_desc:data[0].cat_desc});
            }
        });
    } 
    
     useEffect(() => {
            initCategory();
     }, []); 
    
    
    const handleChange = name => event => {
         setValues({ ...values, [name]: event.target.value });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCategory({cat_name, cat_desc}, props.categoryId).then(data => {
            if(data.error){
                console.log(data.error);
            }else{
                setValues({...values,formSuccess:true})
            }
        });
    } 
    
    const successMessage = () => (
      <div className = "alert alert-info" style = {{ display: formSuccess ? "": "none" }}>
        Category had edited successfully
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
                Edit Category
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

export default EditCategory;