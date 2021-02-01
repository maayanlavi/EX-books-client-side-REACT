
import React, { Component } from 'react';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import Swap from '../Components/swap';
import Menu from '../Components/Menu';

export default function MySwaps() {
    
        return(
            <>
                <div style={{position:'relative', backgroundColor:'red'}}>
                    <img src={header} style={{width:'100%', position: 'absolute', left:'0%', right:'0%', top: '-12%', bottom:'80%'}}  alt="header"/>
                    <h2 style={{color:'white', fontFamily:'Tahoma', position:'absolute', left:'0', right:'0', textAlign:'center', top:'50px'}}>My Swaps</h2>  
                    <Search></Search>
                    <div className="books" style={{position:'absolute', left:'0', right:'0',}}>
                        <Swap></Swap>
                    </div>
                </div>
                <Menu/>
            </>
        )
    }

