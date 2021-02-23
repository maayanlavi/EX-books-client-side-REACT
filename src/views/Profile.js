import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from 'react-hook-form';
import Menu from '../Components/Menu';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [myBooksItems, updateUser] = useState([])
  useEffect(() => {
      let loadMyDetails = async () => {
          const myDetails = await axios({
              method: 'GET',
              withCredentials: true,
              url: `${process.env.REACT_APP_SERVER}/api/current_user`
          })
              .then(res => res.data._id)
              .then(userId => axios({
                  method: 'PUT',
                  withCredentials: true,
                  url: `${process.env.REACT_APP_SERVER}/api/users/${userId}`
              }))
              .then(res => res.data)

            loadMyDetails(myDetails);

      }

      loadMyDetails();
  }, [])
  const classes = useStyles();
  const [registerfirstName, setRegisterfirstName] = useState("");
  const [registerlastName, setRegisterlastName] = useState("");
  const [registeremail, setRegisteremail] = useState("");
  const [registerpassword, setRegisterpassword] = useState("");
  const [registercity, setRegistercity] = useState("");
  const [registerstreet, setRegisterstreet] = useState("");
  const [registerphoneNum, setRegisterphoneNum] = useState("");
  const [registerage, setRegisterage] = useState("");
  const { handleSubmit, control, reset, errors } = useForm();
  const history = useHistory()

  const update = async (data) => {
    const myDetails = await axios({
        method: 'GET',
        withCredentials: true,
        url: `${process.env.REACT_APP_SERVER}/api/current_user`
    })
        .then(res => res.data._id)
        .then(userId => axios({
            method: 'PUT',
            data: data,
            withCredentials: true,
            url: `${process.env.REACT_APP_SERVER}/api/users/${userId}`
        })
        )
        .then(res => {history.push("/Library"); return res.data;});
        update(myDetails);
  }

  const getUser = () => { };

  return (
    <Container component="main" maxWidth="xs" style={{position:'absolute', top:'90px'}}>
      <CssBaseline />
      <div className={classes.paper}  >

        <form onSubmit={handleSubmit(update)}
          className={classes.form}
          noValidate
          style={{ position: "absolute", top: "35%", width: "90%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller as={TextField}
                name="first_name"
                control={control}
                rules={{ required: true }}
                autoComplete="fname"
                onChange={(e) => setRegisterfirstName(e.target.value)}
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              {errors.first_name && <Typography>Missing first name</Typography>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller as={TextField}
                name="last_name"
                control={control}
                rules={{ required: true, pattern: "" }}
                variant="outlined"
                onChange={(e) => setRegisterlastName(e.target.value)}
                fullWidth
                id="last_name"
                label="Last Name"
                autoComplete="lname"
              />
              {errors.last_name && <Typography>Missing last name</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ pattern: /\S+@\S+\.\S+/, required: true }}
                onChange={(e) => setRegisteremail(e.target.value)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {errors.email && <Typography>Incorrect email</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ required: true, pattern: "/^d{10}$/" }}
                onChange={(e) => setRegisterpassword(e.target.value)}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {errors.password && <Typography>Incorrect Password</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ required: true, pattern: "" }}
                onChange={(e) => setRegistercity(e.target.value)}
                fullWidth
                name="address.city"
                label="city"
                type="city"
                id="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ required: true, pattern: "" }}
                onChange={(e) => setRegisterstreet(e.target.value)}
                fullWidth
                name="address.street"
                label="street"
                type="street"
                id="street"
                autoComplete="street"
              />
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ required: true, pattern: "/^[15-90]+$/" }}
                onChange={(e) => setRegisterage(e.target.value)}
                fullWidth
                name="age"
                label="age"
                type="age"
                id="age"
                autoComplete="age"
              />
              {errors.age && <Typography>Missing age</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Controller as={TextField}
                variant="outlined"
                control={control}
                rules={{ required: true, pattern: "/^d{10}$/" }}
                onChange={(e) => setRegisterphoneNum(e.target.value)}
                fullWidth
                name="phone_num"
                label="phoneNum"
                type="phoneNum"
                id="phoneNum"
                autoComplete="phoneNum"
              />
              {errors.phone_num && <Typography>Incorrect phone number</Typography>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            onSubmit={update}
            fullWidth
            variant="contained"
            className={classes.submit}
            style={{
              backgroundColor: "rgba(186, 251, 103, 1)",
              color: "white",
              fontFamily: "tahoma",
              height:'30px',
              marginBottom:'50px'
            }}
          >
            <b>Save changes</b>
          </Button>
        </form>
      </div>
      <Box mt={5}></Box>
        <Menu/>
    </Container>

  );
}
