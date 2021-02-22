
import React, { Component } from 'react';
import Swap from '../Components/swap';
import Menu from '../Components/Menu';

export default function MySwaps() {

    return (
        <>
            <div className="books" style={{ position: 'absolute', left: '0', right: '0', }}>
                <Swap></Swap>
            </div>
            <Menu />
        </>
    )
}

