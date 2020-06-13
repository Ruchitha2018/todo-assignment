import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Todo from "./core/todo-components/ListsTodo";
import AddCategory from "./core/category-components/AddCategory";

import './style.css';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/todo/:catId" exact component = {Todo} />
        <Route path = "/category/add" exact component = {AddCategory} />
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;
