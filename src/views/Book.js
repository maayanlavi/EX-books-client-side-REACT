import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Chip, Grid } from '@material-ui/core';


export default function (props) {
    const [book, setBook] = useState({})
    const params = useParams()
    const {id} = params;

    useEffect(async () => {
        const getBookData = async (bookId) => {
            const bookInfo = await axios(
                {
                    method: 'get',
                    url: `https://openlibrary.org/works/${id}.json`
                }
            )
            .then(res => res.data)
            setBook(bookInfo);
        };

        await getBookData(id);
    }, [])

    return (
        <>
            <div style={{ position: 'relative' }}>
                <img src={header} style={{ width: '100%', position: 'absolute', left: '0%', right: '0%', top: '-12%', bottom: '80%' }} alt="header" />
                <Search></Search>
                <Grid container direction="column" className="books">
                    <Book name={book.title} cover={book.covers ? book.covers[0] : null} subject={book.subjects} ></Book>
                    <Grid container direction="row" spacing={1} alignContent="center" justify="center">
                    { book.subjects ? book.subjects.slice(0, 5).map(s => <Grid item key={s}> <Chip size="small" label={s}></Chip> </Grid>) : <Chip size="small" label="General" ></Chip> }
                    </Grid>
                    <div className="buttons" style={{ marginTop: '40%' }}>
                        <BooksButtons id={id} ></BooksButtons>
                    </div>
                </Grid>
            </div>
            <Menu />
        </>
    )
}

