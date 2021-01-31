import React, { Component } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';

class AllBooks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div className="books">
                <Book></Book>
            </div>
            <div className="buttons" style={{marginTop:'270px'}}>
            <BooksButtons></BooksButtons>
            </div>

            </>
        )
    }
}

export default AllBooks;