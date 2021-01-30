import React, { Component } from 'react';


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
        backgroundColor: '#E9D898',
        color: '#8C6630',
        textAlign: 'center',
        fontSize: '20px',
        border:'1px solid #8C6630',
        borderRadius:'10px',
        fontFamily: 'verdana',
        width:'70%',
        marginTop:'15px'
    }

    render() {
        return(
            <>
            <button style={this.btnStyle}>Offer to replacement</button>
            <button style={this.btnStyle}>Add a review</button>
            <button style={this.btnStyle}>All reviews</button>
            <button style={this.btnStyle}>&hearts; Add to wishlist &hearts; </button>
            </>
        )
    }
}

export default booksButtons;