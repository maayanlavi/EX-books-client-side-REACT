import React, { Component } from 'react';
//import { MdDelete, MdEdit } from 'react-icons/md';
import placeholder from '../popular-1.jpg';
import {NavLink} from 'react-router-dom';


class book extends Component {
    constructor(props){
        super(props);
    }
    btnStyle = {
        position:'absolute',
        top: '250px',
        left:'0',
        right:'0',
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
    imgStyle = {
        position:'absolute',
        top: '25px',
        left:'0',
        right:'0',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',                  
    }

    style1 = {
        textAlign: 'center',
        fontSize: '25px',
        color:'black',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        position:'absolute',
        top:'180px',
        left:'0',
        right:'0',
    }

    divStyle = {
        position:'absolute',
        //top:'100px',
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
            <div className="book" style={this.divStyle}> 
                <NavLink style={{ textDecoration: 'black' }} to="/Book"><img src={placeholder} style={this.imgStyle} alt="book"/></NavLink>
                <h3 style={this.style1}>book name</h3>
            </div>
            </>
            
        )
    }
}

export default book;