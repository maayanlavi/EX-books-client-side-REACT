import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Chip, Grid, MenuItem, Select, Typography } from '@material-ui/core';

export default function (props) {
    const [book, setBook] = useState({})
    const [bookCities, setBookCities] = useState([])
    const { id } = useParams()

    useEffect(async () => {
        const getBookData = async () => {
            try {
                const bookInfo = await axios(`https://openlibrary.org/works/${id}.json`);
                setBook(bookInfo.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getBookData();
    }, [id])

    useEffect(async () => {
        const getBookCities = async () => {
            try {
                const cityList = await axios({
                    url: `${process.env.REACT_APP_SERVER}/api/books/${id}`,
                    withCredentials: true
                })
                setBookCities(cityList.data);
            }
            catch (err) { console.log(err) }
        }
        getBookCities();
    }, [])

    return (
        <>
            <Grid container direction="column" className="books" style={{ position: 'absolute', top: '150px' }}>
                <Book name={book.title} cover={book.covers ? book.covers[0] : null} subject={book.subjects} ></Book>
                <Grid container direction="row" spacing={1} alignContent="center" justify="center">
                    {book.subjects ? book.subjects.slice(0, 5).map(s => <Grid item key={s}> <Chip size="small" label={s}></Chip> </Grid>) : <Chip size="small" label="General" ></Chip>}
                </Grid>
                <div className="buttons">
                    <BooksButtons id={id} />
                </div>
                <Grid container direction="row" alignContent="center" alignContent="center">
                    <Typography>Loan from</Typography>
                    <Select style={{ marginLeft: "20px" }}>
                        {bookCities.map(item => <MenuItem value={item._id}>{item.first_name},{item.age}-{item.city}</MenuItem>)}

                    </Select>
                </Grid>
            </Grid>
            <Menu />
        </>
    )
}

