import React, { Component } from 'react';
import Book from '../Components/book';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import Menu from '../Components/Menu';

export default function AllBooks() {
        return(
            <>
                <div style={{position:'relative'}}>
                    <img src={header} style={{width:'100%', position: 'absolute', left:'0%', right:'0%', top: '-12%', bottom:'80%'}}  alt="header"/>
                    <h2 style={{color:'white', fontFamily:'Tahoma', position:'absolute', left:'0', right:'0', textAlign:'center', top:'50px'}}>Library</h2>  
                    <Search></Search>
                    <div style={{position:'absolute', top:'130px', left:'0', right:'0'}}>
                        <Book></Book>
                    </div>
                    <Menu/>
                </div>
            </>
        )
    }


