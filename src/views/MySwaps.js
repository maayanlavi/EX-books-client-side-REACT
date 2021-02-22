
import React, { Component, useEffect, useState } from 'react';
import header from '../assets/css/img/ReadBooks/header.png';
import Search from '../Components/Search';
import Swap from '../Components/swap';
import Menu from '../Components/Menu';
import axios from 'axios';
import swap from '../Components/swap';
import { Grid } from '@material-ui/core';

export default function MySwaps() {

    const [swaps, setSwaps] = useState([]) 
    const [userInfo, setUserInfo] = useState({})
    useEffect(async () => {
        const getSwapRequests = async () => {
            const userInfo = await axios({
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/current_user`,
                method: 'GET'
            }).then(res => res.data);
            const swaps = await axios({
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/swaps`,
                method: 'GET'
            }).then(res => res.data)

            setUserInfo(userInfo);
            setSwaps(swaps);
        }

        getSwapRequests();
    }, [])

    return (
        <>
            <div className="books" style={{ position: 'absolute', left: '0', right: '0', }}>
                <Grid container direction="column" alignContent="center" justify="center" >
                { swaps.map(s => <Swap key={s._id} swap={s} userid={userInfo._id} ></Swap>) }
                </Grid>
            </div>
            <Menu />
        </>
    )
}

