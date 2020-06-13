import { API } from "../../config";

export const getTasks = (catId) => {
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

export const addTask = task => {
    
    return fetch(`${API}/task/add`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });
};