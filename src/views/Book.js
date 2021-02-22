import React, { Component, useEffect, useState } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Button, Chip, Grid, MenuItem, Select, Typography } from '@material-ui/core';


export default function (props) {
    const [book, setBook] = useState({})
    const [bookCities, setBookCities] = useState([])
    const [showBookWarning, setBookWarning] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    const [selectedUser, setSelectedUser] = useState();
    const { id } = useParams()

    const blockedSubjects = ["bible", "aversion therapy", "unintended consequences", "Beethoven's Fifth Symphony", "gang rape", "psychiatric hospitals", "maturity", "metanoia", "assault", "joyriding", "rape", "metafiction", "orgasm", "novella", "antisocial personality disorder", "classical music", "black comedy", "argot", "Nadsat", "dystopias", "satire", "literature", "Juvenile delinquents", "Science fiction", "Rehabilitation", "Fiction", "Teenage boys", "Criminals", "Sátira", "Muchachos adolescentes", "Criticism and interpretation", "Criminales", "English Authors", "Open Library Staff Picks", "Violence", "Slang language", "Gangs", "Ciencia-ficción", "Social conditions", "Ficción", "Behavior modification", "Long Now Manual for Civilization", "Juvenile delinquency", "Brainwashing", "Fiction, satire", "Fiction, dystopian", "Fiction, science fiction, general", "British and irish fiction (fictional works by one author)", "British and irish drama (dramatic works by one author)", "Kubrick, stanley, 1928-1999", "Burgess, anthony, 1917-1993", "Clockwork orange (Motion picture)", "Romance Ingles", "English literature", "Large type books"]

    useEffect(async () => {
        const getBookData = async () => {
            const bookInfo = await axios(`https://openlibrary.org/works/${id}.json`).then(res => res.data);
            const userInfo = await axios({
                url: `${process.env.REACT_APP_SERVER}/api/current_user`,
                withCredentials: true,
            }).then(res => res.data)

            setUserInfo(userInfo);
            
            if (bookInfo.subjects && bookInfo.subjects.some(s => blockedSubjects.includes(s) ))
                setBookWarning(true);

            console.log(bookInfo.subjects);


            setBook(bookInfo);

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

    const createSwapRequest = () => {
        axios({
          url: `${process.env.REACT_APP_SERVER}/api/current_user`,
          withCredentials: true
        })
        .then(res => res.data)
        .then(userinfo => {
            let swapRequest = {
                user_id1: userinfo._id,
                user_id2:selectedUser,
                book_id2: id,
                swap_status: 'Pending' }
            
            return axios({
                withCredentials: true,
                method: "POST",
                data: swapRequest,
                url: `${process.env.REACT_APP_SERVER}/api/swaps/`
            })
        })
        .then(res => console.log(res));
    }

    

    return (
        <>
            <Grid container direction="column" className="books" style={{ position: 'absolute', top: '150px' }} alignItems="center" alignContent="center">
                {  showBookWarning &&  <Typography>This book is not suited for yound audiences</Typography> } 
                { ((showBookWarning && userInfo.age > 18) || (!showBookWarning)) &&  <>
                        <Book name={book.title} cover={book.covers ? book.covers[0] : null} subject={book.subjects} ></Book>
                        <Grid container direction="row" spacing={1} alignContent="center" justify="center">
                            {book.subjects ? book.subjects.slice(0, 5).map(s => <Grid item key={s}> <Chip size="small" label={s}></Chip> </Grid>) : <Chip size="small" label="General" ></Chip>}
                        </Grid>
                        <div className="buttons">
                            <BooksButtons id={id} />
                        </div>
                            <Grid container direction="row" alignContent="center" justify="center">
                            <Typography>Loan from</Typography>
                            <Select style={{marginLeft: "20px"}} onChange={e => setSelectedUser(e.target.value)} >
                                { bookCities.map(item => <MenuItem key={item._id} value={item._id}>{item.first_name},{item.age}-{item.city}</MenuItem>) }
                            </Select>
                            <Button onClick={createSwapRequest} variant="contained" style={{marginLeft: "30px"}} disabled={selectedUser == null}>Send</Button>
                            </Grid>
                            

                            
                            
                  </>}
            </Grid>
            <Menu />
        </>
    )
}

