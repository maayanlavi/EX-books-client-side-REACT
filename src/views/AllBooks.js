import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import Menu from '../Components/Menu';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function AllBooks() {
    const params = useParams()
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const bookList = await axios({
                method: 'get',
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/books`
            }).then(res => res.data);
            setBooks(bookList);
        }

        fetchData();
    }, []);
    return (
        <>
            <Grid container direction='column' style={{ position: 'absolute', top: '150px', paddingBottom: '80px' }}>
                {books.map(b => <Grid item key={b.id}> <Book cover={b.cover} name={b.name} id={b.id} /> </Grid>)}
            </Grid>
            <Menu />
        </>
    )
}


