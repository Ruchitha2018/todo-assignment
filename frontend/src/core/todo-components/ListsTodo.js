import React, { useState, useEffect, Fragment} from "react";
import { getTodos } from "./apiTodo";

const ListsTodo= () => {

    const [todo, setTodo] = useState([]);
        
    return(
        <div className = "container">
        <div className = "todo-section section">
        <h4>Todo</h4>
        </div>
        </div>
    );
}

export default ListsTodo;