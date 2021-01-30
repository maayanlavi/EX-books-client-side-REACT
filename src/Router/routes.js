import React from 'react';
import Profile from "../views/Profile.js";
import HomePage from "../views/HomePage.js";
import WishList from "../views/WishList.js";
import AllBooks from '../views/AllBooks';
import MyBooks from '../views/MyBooks';
import MySwaps from '../views/MySwaps';
import { Route } from "react-router-dom";
import App from '../App';
import Menu from '../Components/Menu';



const ReactRouter =() => {
        return(
            <React.Fragment>
                <Menu/>
                <Route exact path='/' component={HomePage}/>
                <Route path="/MyBooks" component={MyBooks}/>
                <Route path="/AllBooks" component={AllBooks}/>
                <Route path="/WishList" component={WishList}/>
                <Route path="/MySwaps" component={MySwaps}/>
            </React.Fragment>
        )
}

export default ReactRouter;

