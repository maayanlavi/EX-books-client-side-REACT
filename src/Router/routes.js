import React from 'react';
import Profile from "../views/Profile.js";
import HomePage from "../views/HomePage.js";
import WishList from "../views/WishList.js";
import AllBooks from '../views/AllBooks';
import MyBooks from '../views/MyBooks';
import MySwaps from '../views/MySwaps';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Book from '../views/Book';
import { Route } from "react-router-dom";
import App from '../App';
import Menu from '../Components/Menu';
import AllReviews from '../Components/reviews';



const ReactRouter =() => {
        return(
            <React.Fragment>
                <Menu/>
                <Route exact path='/' component={HomePage}/>
                <Route path="/MyBooks" component={MyBooks}/>
                <Route path="/AllBooks" component={AllBooks}/>
                <Route path="/WishList" component={WishList}/>
                <Route path="/MySwaps" component={MySwaps}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/SignUp" component={SignUp}/>                
                <Route path="/Profile" component={Profile}/>
                <Route path="/Book" component={Book}/>
                <Route path="/AllReviews" component={AllReviews}/>

            </React.Fragment>
        )
}

export default ReactRouter;

