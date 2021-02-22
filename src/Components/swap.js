import React, { Component, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { MenuItem, Select, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function (props) {

    const style1 = {
        textAlign: 'center',
        fontSize: '15px',
        color: 'black',
        fontFamily: 'verdana',
        position: 'relative',
        top: '100px',
        left: '0',
        right: '0',
        border: '1px solid'
    }

    const [myBookList, setMyBookList] = useState([]);
    const [partnetBookList, setPartnerBookList] = useState([]);
    const [myUser, partnerUser] = props.userid == props.swap.user_id1._id ? ["user_id1", "user_id2"] : ["user_id2", "user_id1"];
    const [swap, setSwap] = useState(props.swap);
    const [bookToGive, setBookToGive] = useState("")
    const [bookToReceive, setBookToRecieve] = useState(swap.book_id1)

    const updateSwap = () => {
        const swapUpdateReq = Object.assign({}, swap);
        swapUpdateReq.book_id1 = bookToReceive;
        swapUpdateReq.user_id1 = swapUpdateReq.user_id1._id;
        swapUpdateReq.user_id2 = swapUpdateReq.user_id2._id;
        swapUpdateReq.swap_status = 'Approved'

        axios({
            method: "PUT",
            withCredentials: true,
            url: `${process.env.REACT_APP_SERVER}/api/swaps/${swapUpdateReq._id}`,
            data: swapUpdateReq
        }).then(res => setSwap(res.data));
    }

    const cancelSwap = () => {
        const swapUpdateReq = Object.assign({}, swap);
        swapUpdateReq.user_id1 = swapUpdateReq.user_id1._id | swapUpdateReq.user_id1;
        swapUpdateReq.user_id2 = swapUpdateReq.user_id2._id | swapUpdateReq.user_id2;
        swapUpdateReq.swap_status = 'Canceled'
        axios({
            method: "PUT",
            url: `${process.env.REACT_APP_SERVER}/api/swaps/${swapUpdateReq._id}`,
            data: swapUpdateReq,
            withCredentials: true
        }).then(res => setSwap(swapUpdateReq));
    }

    useEffect(async () => {
        const getBookInfo = async () => {
            const bookInfo = await axios(`https://openlibrary.org/works/${props.swap.book_id2}.json`).then(res => res.data);
            console.log(bookInfo);
            setBookToGive(bookInfo.title);
        };

        getBookInfo();
    }, [])


    useEffect(async () => {
        const getBookList = async () => {
            const list = await axios({
                url: `${process.env.REACT_APP_SERVER}/api/users/${props.swap.user_id1._id}/books`,
                withCredentials: true
            }).then(res => res.data)

            if (props.userid == props.swap.user_id2._id)
                setPartnerBookList(list);
            else
                setMyBookList(list);

        };

        getBookList()
    }, [])

    const renderBookList = (list, changeHandler) => {
        return <Select disabled={swap.swap_status != 'Pending'} value={swap.book_id1} onChange={e => changeHandler(e.target.value)}>{list.map((b, idx) => <MenuItem key={idx} value={b.id} >{b.name} </MenuItem>)}</Select>
    }

    return (
        <>
            <div style={style1}>
                <ButtonGroup color="black" aria-label="outlined primary button group">
                    <Button onClick={updateSwap} disabled={swap.swap_status != 'Pending'} ><b>Confirm Swap</b></Button>
                    <Button onClick={cancelSwap} disabled={swap.swap_status != 'Pending'} >Cancel Swap</Button>
                </ButtonGroup>
                <p>Date: {new Date(props.swap.swap_date).toDateString()}</p>
                <p>The partner's Email: {props.swap[partnerUser].email}</p>
                <p>The book you're giving: {bookToGive}  </p>
                <p>The book you're receiving: {renderBookList(partnetBookList, setBookToRecieve)}</p>
                <p>Status: {swap.swap_status} </p>
            </div>

        </>
    )

}