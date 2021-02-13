import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import Menu from '../Components/Menu';
import axios from 'axios';
import { Grid } from '@material-ui/core';

export default function AllBooks() {
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
           
        return(
            <>
                <div style={{position:'relative' }}>
                    <img src={header} style={{width:'100%', position: 'absolute', left:'0%', right:'0%', top: '-12%', bottom:'80%'}}  alt="header"/>
                    <h2 style={{color:'white', fontFamily:'Tahoma', position:'absolute', left:'0', right:'0', textAlign:'center', top:'50px'}}>Library</h2>  
                    <Search></Search>
                    <Grid container direction='column'>
                        {books.map(b => <Grid item xs key={b.id}> <Book cover={b.cover} name={b.name} id={b.id}/> </Grid>)}
                    </Grid>
                    <Menu/>
                </div>
            </>
        )
    }


