import React, { Component } from 'react';

class AllBooks extends Component {
    constructor(props) {
        super(props);

    }

    style1 = {
        textAlign: 'center',
        fontSize: '15px',
        color:'black',
        fontFamily: 'verdana',
        position:'absolute',
        top:'100px',
        left:'0',
        right:'0',
        border: '1px solid'
    }

    render() {
        return(
            <>
            <div style={this.style1}>
            <p>The partner:</p>
            <p>The book you gave:</p>
            <p>The book you received:</p>
            </div>

            </>
        )
    }
}

export default AllBooks;