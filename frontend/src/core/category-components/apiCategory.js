import { API } from "../../config";

export const getCategories = () => {
 
    return fetch(`${API}/category/list`, {
        method: "GET",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {return data;})};

export const addCategory = category => {
    
    return fetch(`${API}/category/add`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    }).then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });
};