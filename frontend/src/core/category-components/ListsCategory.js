import React, { useState, useEffect, Fragment} from "react";
import { getCategories } from "./apiCategory";

const ListsCategory = () => {

    const [category, setCategory] = useState([]);
    
    const categoryColor = ["#e8384f", "#2B78DC","#9E4CDF", "#E73790", "#28907D", "#FD612C"]

    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error){
                console.log("error");
            }else{
                console.log(data);
                setCategory(data);
            }
        }); 
    };

     useEffect(() => {
            loadCategories();
     }, []);  
    
    const displayCategory = () => (
     <div className = "row">
          {category.map((data, index) => (
           <div className = "col-md-3">
            <div className = "category-card" style={{background: categoryColor[index]}}>
                <h5>{data.name}</h5>
                <p>{data.desc}</p>
                <h6>Jun 12th 2020</h6>  
           </div>
           </div>
          ))}
    </div>    
    );

 
    
    return(
        <div className = "container">
        <div className = "category-section section">
        <h4>Categories</h4>
        {displayCategory()}
        </div>
        </div>
    );
}

export default ListsCategory;