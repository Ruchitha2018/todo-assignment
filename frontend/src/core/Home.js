import React, { useState, useEffect, Fragment} from "react";
import Header from "./common-components/Header";
import Category from "./category-components/ListsCategory";

 const Home = () => { 
    return(
        <Fragment>
        <Header />
        <Category />
        </Fragment>
    );
}

export default Home;