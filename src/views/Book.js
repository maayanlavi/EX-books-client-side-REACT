import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import { useParams } from "react-router-dom";
import axios from 'axios';


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
    }, id)

    return (
        <>
            <div style={{ position: 'relative' }}>
                <img src={header} style={{ width: '100%', position: 'absolute', left: '0%', right: '0%', top: '-12%', bottom: '80%' }} alt="header" />
                <Search></Search>
                <div className="books">
                    <Book name={book.title} cover={book.covers ? book.covers[0] : null} ></Book>
                    <div className="buttons" style={{ marginTop: '40%' }}>
                        <BooksButtons id={id} ></BooksButtons>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    )
}

