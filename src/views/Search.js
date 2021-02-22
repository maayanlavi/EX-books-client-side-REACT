import { Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Book from '../Components/book';
import Menu from "../Components/Menu";

export default function (props) {
    const [books, setBooks] = useState([])
    const params = useParams();
    const title = params.title;
    useEffect(async () => {
        const getBooks = async () => {
            const bookList = await axios(`http://openlibrary.org/search.json?q=${title}`
            ).then(results => {

                return results.data.docs.filter(item => item.cover_i).slice(0, 10)
            })
                .then(books => {
                    return books.map(book => ({ id: book.key.split('/')[2], cover: book.cover_i, name: book.title }))
                })
            setBooks(bookList);
        };

        getBooks();

    }, [title]);

    return <>
        <div style={{ position: 'absolute', top: '150px', left: '0', right: '0' }}>
            <Grid container direction="column" style={{ paddingBottom: "50px" }}>
                {books.map(item =>
                    <Grid item xs key={item.id}>
                        <Grid container direction="column" alignItems="center">
                            <Book id={item.id} name={item.name} cover={item.cover}></Book>
                        </Grid>
                    </Grid>)}
            </Grid>

        </div>
        <Menu />
    </>
}