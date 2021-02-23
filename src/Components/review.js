import React, { Component, useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

export default function (props) {

    const [editing, setEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({})

    useEffect(async () => {
        const getUser = async () => {
            const userInfo = await axios({
                withCredentials: true,
                url: `${process.env.REACT_APP_SERVER}/api/current_user`
            }).then(res => res.data);

            setUserInfo(userInfo);
            console.log(userInfo, props);
        }
        getUser();
    }, [])




    const edit = () => {
        setEditing(true);
        props.onUpdate(props.reviewId, props.review)
    }

    const remove = () => {
        props.onDelete(props.reviewId)
    }

    const reviewStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        textAlign: 'center'
    }

    return (
        <div className="review" style={reviewStyle}>
            <span>{props.children}<br /></span>
            {  userInfo._id == props.user && 
            <> 
                <button onClick={edit}><EditIcon /></button>
                <button onClick={remove}><DeleteIcon /></button>
            </>}
        </div>
    )

}