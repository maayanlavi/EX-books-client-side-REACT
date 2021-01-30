import React, { Component } from 'react';
import Swap from '../Components/swap';


class MySwaps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            swaps: [ ]
        }
    }

    render() {
        return(
            <>
            <h1 style={{textAlign:'center',color:'#8C6630', fontFamily: 'Open Sans',}}>MY SWAPS</h1>
            <div className="books" style={{position:'absolute', left:'0', right:'0',}}>
                <Swap></Swap>
            </div>
            </>
        )
    }
}

export default MySwaps;