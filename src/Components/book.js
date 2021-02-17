import React, { Component } from 'react';
//import { MdDelete, MdEdit } from 'react-icons/md';
import placeholder from '../popular-1.jpg';
import {NavLink} from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';


class book extends Component {
    constructor(props){
        // the book componenet receieves as prop the book id, cover id (or null if there is no cover) name and category
        super(props);
    }

    render() {
        let coverUrl = this.props.cover ? `https://covers.openlibrary.org/b/id/${this.props.cover}-M.jpg` : 'https://via.placeholder.com/108x100.png'
        return (
            <>
            <Grid container direction='column' alignItems='center' justify='center'>
                <Grid item xs>
                    <NavLink to={`/Book/${this.props.id}`}><img src={coverUrl} style={this.imgStyle} alt="book"/></NavLink>
                </Grid>
                <Grid item xs>
                    <NavLink to={`/Book/${this.props.id}`}><Typography align='center'>{this.props.name}</Typography></NavLink>
                </Grid>
            </Grid>
            </>
            
        )
    }
}

export default book;