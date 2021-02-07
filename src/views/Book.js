import React, { Component } from 'react';
import Book from '../Components/book';
import BooksButtons from '../Components/bookButtons';
import Menu from '../Components/Menu';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';


class AllBooks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div style={{position:'relative'}}>
                    <img src={header} style={{width:'100%', position: 'absolute', left:'0%', right:'0%', top: '-12%', bottom:'80%'}}  alt="header"/>
                    <Search></Search>
                    <div className="books">
                        <Book></Book>
                        <div className="buttons" style={{marginTop:'40%'}}>
                            <BooksButtons></BooksButtons>
                        </div>
                    </div>
                    
                </div>
                <Menu/>
            </>
        )
    }
}

export default AllBooks;