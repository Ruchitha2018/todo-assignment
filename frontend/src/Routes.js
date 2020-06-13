import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";

import ListsTask from "./core/task-components/ListsTask";
import AddTask from "./core/task-components/AddTask";

import AddCategory from "./core/category-components/AddCategory";

import './style.css';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/task/:catId" exact component = {ListsTask} />
        <Route path = "/add-task" exact component = {AddTask} />
        <Route path = "/category/add" exact component = {AddCategory} />
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;
