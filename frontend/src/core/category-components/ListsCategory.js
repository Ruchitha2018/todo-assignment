import React, { useState, useEffect, Fragment} from "react";
import { getCategories, deleteCategory } from "./apiCategory";
import ModalDesign from "../common-components/ModalDesign";
import moment from 'moment'


const ListsCategory = () => {

    const [category, setCategory] = useState([]);
    
    const categoryColor = ["#e8384f", "#2B78DC","#9E4CDF", "#E73790", "#28907D", "#FD612C","#e8384f", "#2B78DC","#9E4CDF", "#E73790", "#28907D", "#FD612C","#e8384f", "#2B78DC","#9E4CDF", "#E73790", "#28907D", "#FD612C"]

    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error){
                console.log("error");
            }else{
                setCategory(data);
            }
        }); 
    };
    
    const removeCategory = catId => {
        let confirmDelete = window.confirm('Delete item forever?');
        if(confirmDelete){
        deleteCategory(catId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategories();
            }
        });
    }};
    
     useEffect(() => {
            loadCategories();
     }, []);  
    
    
    const displayCategory = () => (
     <div className = "row">
          {category.map((data, index) => (
           <div className = "col-md-3">
            <div className = "category-card" style={{background: categoryColor[index]}}>
                <p>{moment(data.created).format("MMM Do YYYY")}</p> 
                <h6>{data.cat_name}</h6>
                 <p>{data.cat_desc}</p>
               <div className = "card-inner-content">
                  <p onClick={() => removeCategory(data.id)}><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</p>
                  <ModalDesign element = "category" title="Edit Category" button="edit-category" id = {data.id}/>
                </div>
           </div>
           </div>
          ))}
    </div>    
    );

    return(
        <div className = "container">
        <div className = "category-section section">
        <h4>Categories</h4>
            <ModalDesign element = "category" title="Add Category" button="add-category"/>
            {displayCategory()}
        </div>
        </div>
    );
}

export default ListsCategory;