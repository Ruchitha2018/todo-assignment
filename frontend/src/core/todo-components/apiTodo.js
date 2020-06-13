import { API } from "../../config";

export const getTodos = (catId) => {
    console.log(catId);
 
    return fetch(`${API}/task/list/${catId}`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})};