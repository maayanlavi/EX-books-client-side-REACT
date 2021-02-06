import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Reviews from './reviews';



class booksButtons extends Component {
    constructor(props) {
        super(props);
    }

    btnStyle = {
        position:'relative',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'rgba(186, 251, 103, 1)',
        color: 'black',
        textAlign: 'center',
        fontSize: '20px',
        border:'1px solid black',
        borderRadius:'10px',
        fontFamily: 'verdana',
        width:'70%',
        marginTop:'15px'
    }

    render() {
        return(
            <>
            <button style={this.btnStyle}>Offer to replacement</button>
            {/* <button style={this.btnStyle}>Add a review</button> */}
            <button style={this.btnStyle}><NavLink style={{ textDecoration: 'black' }} to="/AllReviews">All reviews</NavLink></button>
            <button style={this.btnStyle}>&hearts; Add to wishlist &hearts; </button>
            </>
        )
    }
}

export default booksButtons;