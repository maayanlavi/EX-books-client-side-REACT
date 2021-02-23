import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';


export default function (props) {
    let coverUrl = props.cover ? `https://covers.openlibrary.org/b/id/${props.cover}-M.jpg` : 'https://via.placeholder.com/108x100.png'
    let bookNavPage = `/Book/${props.id}`
    if (props.wishlist)
        bookNavPage = `${bookNavPage}/wishlist`

    return (
        <>
            <Grid container direction='column' alignItems='center' justify='center'>
                <Grid item xs>
                    <NavLink to={bookNavPage}><img src={coverUrl} alt="book" /></NavLink>
                </Grid>
                <Grid item xs>
                    <NavLink to={bookNavPage}><Typography align='center'>{props.name}</Typography></NavLink>
                </Grid>
            </Grid>
        </>

    )
}


