import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '../Components/Menu';
import axios from 'axios';
import { Grid } from '@material-ui/core';

export default function MyBooks() {

    const [myBooksItems, setMyBooksItems] = useState([])
    useEffect(() => {
        let loadMyBooks = async () => {
            const myBooks = await axios({
                method: 'GET',
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/current_user`
            })
                .then(res => res.data._id)
                .then(userId => axios({
                    method: 'GET',
                    withCredentials: true,
                    url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/books`
                }))
                .then(res => res.data)

                setMyBooksItems(myBooks);

        }

        loadMyBooks();
    }, [])

    const removeItemFromMyBooks = (bookId, e) => {
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
                url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/books/${bookId}`
            }))
            .then(() => setMyBooksItems(myBooksItems.filter(item => item.id != bookId))) // this 'hack' will reset state and cause the component to reload with updated book list
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <img src={header} style={{ width: '100%', position: 'absolute', left: '0%', right: '0%', top: '-12%', bottom: '80%' }} alt="header" />
                <h2 style={{ color: 'white', fontFamily: 'Tahoma', position: 'absolute', left: '0', right: '0', textAlign: 'center', top: '50px' }}>My Books</h2>
                <Search></Search>
                <div style={{position:'absolute', top:'150px', left:'0', right:'0'}}>
                {/* <button style={{position:'absolute', left:'0', right:'0', top:'10px', display: 'block', justifyContent: 'center', alignItems: 'center', margin: 'auto', backgroundColor: 'rgba(186, 251, 103, 1)', color: 'black', textAlign: 'center', fontSize: '25px', border:'1px solid #8C6630', borderRadius:'10px'}}><DeleteIcon/></button> */}
                <Grid container direction="column" style={{paddingBottom: "50px"}}>
                    {myBooksItems.map(item =>
                        <Grid item xs key={item.id}>
                            <Grid container direction="column" alignItems="center">
                                <Book id={item.id} name={item.name} cover={item.cover}></Book>
                                <button onClick={e => removeItemFromMyBooks(item.id, e)}><DeleteIcon /></button>
                            </Grid>
                        </Grid>)}
                </Grid>

                </div>
            </div>
            <Menu />
        </>
    )
}

