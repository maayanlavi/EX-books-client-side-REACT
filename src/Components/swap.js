import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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

export default function(props) {

    const style1 = {
        textAlign: 'center',
        fontSize: '15px',
        color: 'black',
        fontFamily: 'verdana',
<<<<<<< HEAD
        position: 'absolute',
        top: '100px',
        left: '0',
        right: '0',
        border: '1px solid'
    }



    render() {
        return (
            <>
                <div style={this.style1}>
                    <ButtonGroup color="black" aria-label="outlined primary button group">
                        <Button><b>Confirm Swap</b></Button>
                        <Button>Cancel Swap</Button>
                    </ButtonGroup>
                    <p>Date:</p>
                    <p>The partner's Email:</p>
                    <p>The book you gave:</p>
                    <p>The book you received:</p>
                    <p>Status:</p>
                </div>

            </>
        )
    }
}

export default AllBooks;
=======
        position:'relative',
        top:'100px',
        left:'0',
        right:'0',
        border: '1px solid'
    }

    console.log(props.date);

    return(
        <>
        <div style={style1}>
            <ButtonGroup color="black" aria-label="outlined primary button group">            
                <Button><b>Confirm Swap</b></Button>
                <Button>Cancel Swap</Button>
            </ButtonGroup>
            <p>Date: { new Date(props.date).toDateString() }</p>
            <p>The partner's Email: {props.email}</p>
            <p>The book you gave:  </p>
            <p>The book you received:</p>
            <p>Status:</p>
        </div>

        </>
    )
    
}
>>>>>>> 3acd5fa976334ba47b1e015204f884126307d71c
