import React, { Component } from 'react';
import Book from '../Components/book';
import DeleteIcon from '@material-ui/icons/Delete';


class MyBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [ ]
        }
    }

    btnStyle = {
        position:'relative',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: '#E9D898',
        color: '#8C6630',
        textAlign: 'center',
        fontSize: '25px',
        border:'1px solid #8C6630',
        borderRadius:'10px',
        fontFamily: 'verdana',

    }

    render() {
        return(
            <>
            <h1 style={{textAlign:'center',color:'#8C6630', fontFamily: 'Open Sans',}}>MY BOOKS</h1>
            <div className="books" style={{position:'absolute', top: '150px', left:'0', right:'0',}}>
                <Book></Book>
            </div>
            <button style={this.btnStyle}><DeleteIcon/></button>
            </>
        )
    }
}

export default MyBooks;