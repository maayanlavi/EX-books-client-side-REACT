import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field } from '@progress/kendo-react-form';
import {NavLink} from 'react-router-dom';
import light from '../assets/css/img/ReadBooks/light.png';
import blueTop from '../assets/css/img/ReadBooks/Ellipse8.png';



//import { Button } from '@progress/kendo-react-buttons';

import {
     FormFloatingNumericTextBox
} from './form-components.jsx';

import {
    requiredValidator
} from './validators.jsx'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [registerfirstName, setRegisterfirstName]= useState("");
  const [registerlastName, setRegisterlastName]= useState("");
  const [registeremail, setRegisteremail]= useState("");
  const [registerpassword, setRegisterpassword]= useState("");
  const [registercity, setRegistercity]= useState("");
  const [registerstreet, setRegisterstreet]= useState("");
  const [registerphoneNum, setRegisterphoneNum]= useState("");
  const [registerage, setRegisterage]= useState("");
  const register=(e)=>{
    e.preventDefault();
    console.log(process.env)
    axios({
      method: "POST",
      data:{
        first_name: registerfirstName,
        last_name: registerlastName,
        email: registeremail,
        password: registerpassword,
        address: {
          city: registercity,
          street: registerstreet
        },
        phone_num: registerphoneNum,
        age: registerage
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_SERVER}/register`
    }).then(res=> console.log(res));

  }

  const getUser=()=>{};




  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img src={blueTop} style={{position: 'absolute', left:'-1%', top: '-1%'}}  alt="book"/>
      <div className={classes.paper}>
      <img src={light} style={{position: 'absolute', left:'33.33%', right:'30%', top: '8.25%', bottom:'75%', width:'30%' }}  alt="book"/>
        <Typography variant="h5" style={{position:'absolute', top:'25%', color:'rgba(56, 79, 125, 0.8)'}}>
          <b>Welcome!</b>
        </Typography>
        <Typography variant="h7" style={{position:'absolute', top:'30%',textAlign:'center', color:'rgba(56, 79, 125, 0.8)'}}>
        Create your account to get started. After that, you can share books and make swaps.
        </Typography>
        <form className={classes.form} noValidate style={{position:'absolute', top:'35%', width:'90%'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="fname" onChange={e => setRegisterfirstName(e.target.value) } name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" onChange={e=> setRegisterlastName(e.target.value)} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegisteremail(e.target.value)} required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegisterpassword(e.target.value)} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegistercity(e.target.value)} required fullWidth name="city" label="city" type="city" id="city" autoComplete="city" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegisterstreet(e.target.value)} required fullWidth name="street" label="street" type="street" id="street" autoComplete="street" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegisterage(e.target.value)} required fullWidth name="age" label="age" type="age" id="age" autoComplete="age" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" onChange={e=>setRegisterphoneNum(e.target.value)} required fullWidth name="phoneNum" label="phoneNum" type="phoneNum" id="phoneNum" autoComplete="phoneNum" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} 
              label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" onClick={register} fullWidth variant="contained" className={classes.submit} style={{backgroundColor:'rgba(186, 251, 103, 1)', color:'white', fontFamily:'tahoma'}} >
           <b>Sign Up</b> 
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/SignIn" variant="body2"> Already have an account? Sign in  </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}   