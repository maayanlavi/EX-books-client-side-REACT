import React, { useState } from 'react';
import Profile from "../views/Profile.js";
import WishList from "../views/WishList.js";
import AllBooks from '../views/AllBooks';
import MyBooks from '../views/MyBooks';
import MySwaps from '../views/MySwaps';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Book from '../views/Book';
import { Route, Switch, Redirect } from "react-router-dom";
import AllReviews from '../Components/reviews';
import ReadBooks from '../views/ReadBooks';
import ReviewThem from '../views/ReviewThem';
import MakeASwap from '../views/MakeASwap';
import Layout from '../Components/Layout/Layout.js';
import Search from '../views/Search.js';

const ReactRouter = () => {
    let routes = <>
        <Route path="/SignIn">
            <SignIn />
        </Route>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/">
            <Redirect to="/signin" />
        </Route>
        <Route path="/MyBooks">
            <Layout title='My Books'>
                <MyBooks />
            </Layout>
        </Route>
        <Route path="/Library">
            <Layout title='Library'>
                <AllBooks />
            </Layout>
        </Route>
        <Route path="/WishList">
            <Layout title='My Wish List'>
                <WishList />
            </Layout>
        </Route>
        <Route path="/MySwaps">
            <Layout title='My Swaps'>
                <MySwaps />
            </Layout>
        </Route>
        <Route path="/Profile">
            <Layout>
                <Profile />
            </Layout>
        </Route>
        <Route exact path="/Book/:id" component={Book}>
            <Layout>
                <Book />
            </Layout>
        </Route>
        <Route path="/Search/:title" component={Search}>
            <Layout>
                <Search></Search>
            </Layout>
        </Route>
        <Route path="/AllReviews/:id">
            <Layout>
                <AllReviews />
            </Layout>
        </Route>
    </>

    return (
        <Switch>
            <Route exact path='/'>
                <ReadBooks />
            </Route>
            <Route path="/ReviewThem">
                <ReviewThem />
            </Route>
            <Route path="/MakeASwap">
                <MakeASwap />
            </Route>
            {routes}
        </Switch>
    )
}

export default ReactRouter;

