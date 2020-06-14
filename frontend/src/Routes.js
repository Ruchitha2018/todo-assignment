import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";

import ListsTask from "./core/task-components/ListsTask";
import AddTask from "./core/task-components/AddTask";

import AddCategory from "./core/category-components/AddCategory";

import ModalDesign from "./core/common-components/ModalDesign";


import './style.css';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/category-task/:catId" exact component = {ListsTask} />
        <Route path = "/modal" exact component = {ModalDesign} />
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;
