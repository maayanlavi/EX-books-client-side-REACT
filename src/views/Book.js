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
    const { id } = params;

    useEffect(async () => {
        const getBookData = async () => {
            try {
                const bookInfo = await axios(`https://openlibrary.org/works/${id}.json`)
                setBook(bookInfo.data);
            }
            catch (error) {
             console.log(error);
            }
        }
        getBookData();
        }, [id])

    return (
        <>
                <Grid container direction="column" className="books" style={{ position: 'absolute', top: '150px' }}>
                    <Book name={book.title} cover={book.covers ? book.covers[0] : null} subject={book.subjects} ></Book>
                    <Grid container direction="row" spacing={1} alignContent="center" justify="center">
                        {book.subjects ? book.subjects.slice(0, 5).map(s => <Grid item key={s}> <Chip size="small" label={s}></Chip> </Grid>) : <Chip size="small" label="General" ></Chip>}
                    </Grid>
                    <div className="buttons">
                        <BooksButtons id={id} ></BooksButtons>
                    </div>
                </Grid>
            <Menu />
        </>
    )
}

