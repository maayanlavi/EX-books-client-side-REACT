import React, { Component } from 'react';
//import { MdDelete, MdEdit } from 'react-icons/md';
import placeholder from '../popular-1.jpg';
import {NavLink} from 'react-router-dom';


class book extends Component {
    constructor(props){
        super(props);
    }

    imgStyle = {
        position:'absolute',
        top: '0',
        left:'0',
        right:'0',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',                  
    }

    style1 = {
        textAlign: 'center',
        fontSize: '20px',
        color:'black',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        position:'absolute',
        left:'0',
        right:'0',
        top:'150px'
    }

    divStyle = {
        position:'relative',
        top:'50px',
        left:'0',
        right:'0',
    }

    render() {
        return (
            <>
            <div className="book" style={this.divStyle}> 
                <NavLink style={{ textDecoration: 'black' }} to="/Book"><img src={placeholder} style={this.imgStyle} alt="book"/></NavLink>
                <h3 style={this.style1}>book name</h3>
            </div>
            </>
            
        )
    }
}

export default book;