import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink, useHistory } from "react-router-dom";
import blueTop from "../assets/css/img/ReadBooks/Ellipse8.png";
import orange from "../assets/css/img/ReadBooks/Ellipse6.png";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setIsLogged }) {
  const classes = useStyles();
  const [signInemail, setSignInemail] = useState("");
  const [signInpassword, setSignInpassword] = useState("");
  const { handleSubmit, control, reset, errors } = useForm();

  const history = useHistory();
  const login = (data) => {
    axios({
      method: "POST",
      data: data,
      withCredentials: true,
      url: `${process.env.REACT_APP_SERVER}/login`,
    })
      .then((res) => {
        //get the user id, and pass to library
        return axios({
          method: "get",
          url: `${process.env.REACT_APP_SERVER}/api/current_user`,
          withCredentials: true,
        });
      })
      .then((res) => {
        return res.data._id;
      })
      .then((userId) => {
        history.push(`/Library/${userId}`);
      })
      .catch((err) => console.log("show message login failed", err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img
        src={blueTop}
        style={{ position: "absolute", left: "-1%", top: "-1%" }}
        alt="book"
      />
      <div className={classes.paper}>
        <img
          src={orange}
          style={{
            position: "absolute",
            left: "70%",
            top: "14%",
            bottom: "70%",
            width: "30%",
          }}
          alt="book"
        />
        <Typography
          component="h1"
          variant="h5"
          style={{
            position: "absolute",
            top: "25%",
            color: "rgba(56, 79, 125, 0.8)",
          }}
        >
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(login)}
          style={{ position: "absolute", top: "35%", width: "90%" }}
        >
          <Controller
            as={TextField}
            name="email"
            control={control}
            rules={{ pattern: /\S+@\S+\.\S+/, required: true }}
            onChange={(e) => setSignInemail(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {errors.email && (
            <Typography color="red">Please enter a correct email</Typography>
          )}
          <Controller
            as={TextField}
            name="password"
            control={control}
            rule={{ reuired: true }}
            onChange={(e) => setSignInpassword(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <Typography color="red">Please enter a correct password</Typography>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              backgroundColor: "rgba(186, 251, 103, 1)",
              color: "white",
              fontFamily: "tahoma",
            }}
          >
            <b>Sign In</b>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
