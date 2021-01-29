import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import books from '../logo4.png';
import light from '../light.png';
import React, { Component } from 'react';

class home extends Component {

    style1 = {
        textAlign: 'center',
        fontSize: '25px',
        color:'#8E5727',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        position:'absolute',
        top:'200px',
        left:'0',
        right:'0',
    }

    style2 = {
        textAlign: 'center',
        fontSize: '55px',
        color:'#8E5727',
        fontFamily: 'Open Sans',
        position:'absolute',
        top: '250px',
        left:'0',
        right:'0',
    }

    style3 = {
        textAlign: 'center',
        fontSize: '15px',
        color:'#8E5727',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        position:'absolute',
        top: '380px',
        left:'0',
        right:'0',
    }

    imgStyle = {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',                  
    }

    btnStyle = {
        position:'absolute',
        top: '480px',
        left:'0',
        right:'0',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'white',
        color: '#8E5727',
        textAlign: 'center',
        fontSize: '25px',
        border:'2px solid #8E5727',
        borderRadius:'10px',
        fontFamily: 'verdana',

    }

    
    render() {
    return (
        <div style={{backgroundColor:'#E8E4C2'}}>
        <img src={light} style={this.imgStyle} alt="light"/>            
        <p style={this.style1}> Hi user, <br /> Welcome to </p>
        <p style={this.style2}>EX-BOOKS</p>
        <p style={this.style3}>A system for managing book reviews and providing the option of switching between users.</p>
        <button style={this.btnStyle}>How it works?</button>
        <img style={{width:'100%', display:'block', marginTop:'180px'}}src={books} alt="books"/>
        <div style={{textAlign: 'center'}}>
        <p>1. Choose a book you have read</p>
        <p>2. write a review on it </p>
        <p>3. Offer it for replacement</p>
        <p>4. Start looking for a user who is interested in your book in exchange for a book from your wish list </p>
        <p>5. Did you find a match? Make the replacement!</p>
        <p>6. Enjoy your new book :)</p> 
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              EX-books
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </div> 

    );
}
}

export default home;