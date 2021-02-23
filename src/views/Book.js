import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import { Button, Chip, Grid, MenuItem, Select, Typography } from '@material-ui/core';

export default function (props) {
    const [book, setBook] = useState({})
    const [bookCities, setBookCities] = useState([])
    const [showBookWarning, setBookWarning] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    const [selectedUser, setSelectedUser] = useState();
    const [bookList, setBookList] = useState([])
    const [selectedBook, setSelectedBook] = useState();
    const history = useHistory();
    const { id, src } = useParams()
    const blockedSubjects = [  "gang rape", "psychiatric hospitals",  "assault", "joyriding", "rape", "metafiction", "orgasm",  "antisocial personality disorder", "horror", "Horror", "Sexuality"]
    useEffect(async () => {
        const getBookData = async () => {
            const bookInfo = await axios(`https://openlibrary.org/works/${id}.json`).then(res => res.data);
            const userInfo = await axios({
                url: `${process.env.REACT_APP_SERVER}/api/current_user`,
                withCredentials: true,
            }).then(res => res.data)

            setUserInfo(userInfo);

            if (bookInfo.subjects && bookInfo.subjects.some(s => blockedSubjects.includes(s)))
                setBookWarning(true);

            setBook(bookInfo);

        }
        getBookData();
    }, [id])

    useEffect(async () => {
        const getUserBooks = async () => {
            if (!selectedUser) {
                setBookList([])
            }
            else
            {
                const bookList = await axios({
                    withCredentials: true,
                    url: `${process.env.REACT_APP_SERVER}/api/users/${selectedUser}/books`
                }).then(res => res.data);

                setBookList(bookList);
            }

        }

        getUserBooks()
    }, [selectedUser])

    useEffect(async () => {
        const getBookCities = async () => {
            let url = `${process.env.REACT_APP_SERVER}/api/books/${id}`
            if (src)
                url = `${url}?src=${src}`
            try {
                const cityList = await axios({
                    url: url,
                    withCredentials: true
                })
                setBookCities(cityList.data);
            }
            catch (err) { console.log(err) }
        }
        getBookCities();
    }, [])

    const createSwapRequest = () => {
        axios({
            url: `${process.env.REACT_APP_SERVER}/api/current_user`,
            withCredentials: true
        })
            .then(res => res.data)
            .then(userinfo => {
                let swapRequest = {
                    user_id1: userinfo._id,
                    user_id2: selectedUser,
                    book_id1: id,
                    book_id2: selectedBook,
                    swap_status: 'Pending'
                }

                return axios({
                    withCredentials: true,
                    method: "POST",
                    data: swapRequest,
                    url: `${process.env.REACT_APP_SERVER}/api/swaps/`
                })
            })
            .then(res => history.push("/Library"));
    }

    const renderBookList = () => {
        return <Select value={selectedBook} onChange={e => setSelectedBook(e.target.value)}>{bookList.map((b, idx) => <MenuItem key={idx} value={b.id} >{b.name} </MenuItem>)}</Select>
    }

    return (
        <>
            <Grid container direction="column" className="books" style={{ position: 'absolute', top: '150px' }} alignItems="center" alignContent="center">
                {showBookWarning && <Typography>This book is not suited for yound audiences</Typography>}
                {((showBookWarning && userInfo.age > 18) || (!showBookWarning)) && <>
                    <Book name={book.title} cover={book.covers ? book.covers[0] : null} subject={book.subjects} id={id} ></Book>
                    <Grid container direction="row" spacing={1} alignContent="center" justify="center">
                        {book.subjects ? book.subjects.slice(0, 5).map(s => <Grid item key={s}> <Chip size="small" label={s}></Chip> </Grid>) : <Chip size="small" label="General" ></Chip>}
                    </Grid>
                    <div className="buttons">
                        <BooksButtons id={id} />
                    </div>
                    <Grid container direction="row" alignContent="center" justify="center">
                        <Typography>{ src=='wishlist' ? 'Loan To' : 'Loan from'}</Typography>
                        <Select style={{ marginLeft: "20px" }} onChange={e => setSelectedUser(e.target.value)} >
                            {bookCities.map(item => <MenuItem key={item._id} value={item._id}>{item.first_name},{item.age}-{item.city}</MenuItem>)}
                        </Select>
                        { (src && selectedUser) && renderBookList()
                        }
                        <Button onClick={createSwapRequest} variant="contained" style={{ marginLeft: "30px" }} disabled={selectedUser == null}>Send</Button>
                    </Grid>
                </>}
            </Grid>
            <Menu />
        </>
    )
}

