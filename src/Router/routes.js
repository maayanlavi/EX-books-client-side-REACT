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
import ReadBooks from '../views/ReadBooks';
import ReviewThem from '../views/ReviewThem';
import MakeASwap from '../views/MakeASwap';



const ReactRouter =() => {
        return(
            <React.Fragment>
                <Route exact path='/' component={ReadBooks}/>
                <Route path="/MyBooks" component={MyBooks}/>
                <Route path="/Library" component={AllBooks}/>
                <Route path="/WishList" component={WishList}/>
                <Route path="/MySwaps" component={MySwaps}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/SignUp" component={SignUp}/>                
                <Route path="/Profile" component={Profile}/>
                <Route exact path="/Book/:id" component={Book}/>
                <Route path="/AllReviews" component={AllReviews}/>
                <Route path="/ReviewThem" component={ReviewThem}/>
                <Route path="/MakeASwap" component={MakeASwap}/>
            </React.Fragment>
        )
}

export default ReactRouter;

