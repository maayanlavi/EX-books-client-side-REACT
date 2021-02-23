import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '../Components/Menu';
import axios from 'axios';
import { Grid } from '@material-ui/core';

export default function MyWishlist() {

    const [wishlistItems, setWishlistItems] = useState([])
    useEffect(() => {
        let loadWishList = async () => {
            const wishlist = await axios({
                method: 'GET',
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/current_user`
            })
                .then(res => res.data._id)
                .then(userId => axios({
                    method: 'GET',
                    withCredentials: true,
                    url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/wishlist`
                }))
                .then(res => res.data)

            setWishlistItems(wishlist);
        }

        loadWishList();
    }, [])

    const removeItemFromWishlist = (bookId, e) => {
        axios(
            {
                method: 'GET',
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/current_user`
            }
        )
            .then(res => res.data._id)
            .then(userId => axios({
                method: 'DELETE',
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/wishlist/${bookId}`
            }))
            .then(() => setWishlistItems(wishlistItems.filter(item => item.id != bookId))) // this 'hack' will reset state and cause the component to reload with updated book list
    }

    return (
        <>
            <div style={{ position: 'absolute', top: '150px', left: '0', right: '0' }}>
                <Grid container direction="column" style={{ paddingBottom: "50px" }}>
                    {wishlistItems.map(item =>
                        <Grid item xs key={item.id}>
                            <Grid container direction="column" alignItems="center">
                                <Book id={item.id} name={item.name} cover={item.cover} ></Book>
                                <button onClick={e => removeItemFromWishlist(item.id, e)}><DeleteIcon /></button>
                            </Grid>
                        </Grid>)}
                </Grid>

            </div>
            <Menu />
        </>
    )
}

