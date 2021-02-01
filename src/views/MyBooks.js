import React, { Component } from 'react';
import Book from '../Components/book';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '../Components/Menu';

export default function MyBooks() {
    
        return(
            <>
                <div style={{position:'relative', backgroundColor:'red'}}>
                    <img src={header} style={{width:'100%', position: 'absolute', left:'0%', right:'0%', top: '-12%', bottom:'80%'}}  alt="header"/>
                    <h2 style={{color:'white', fontFamily:'Tahoma', position:'absolute', left:'0', right:'0', textAlign:'center', top:'50px'}}>My Books</h2>  
                    <Search></Search>
                    <Book></Book>
                </div>
                <button style={{position:'absolute', left:'0', right:'0', top:'57%', display: 'block', justifyContent: 'center', alignItems: 'center', margin: 'auto', backgroundColor: 'rgba(186, 251, 103, 1)', color: 'black', textAlign: 'center', fontSize: '25px', border:'1px solid #8C6630', borderRadius:'10px', fontFamily: 'verdana',}}><DeleteIcon/></button>
                <Menu/>

            </>
        )
    }

