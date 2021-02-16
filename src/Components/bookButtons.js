import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/Add';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  },
});

export default function BookButtons(props) {
  const bookId = props.id;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openNotification, setOpenNotification] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState('');
  const addToWishlist = () => {
    axios({
      method: 'get', //first get the connected user information from the server
      url: `${process.env.REACT_APP_SERVER}/api/current_user`,
      withCredentials: true
    })
    .then(res => { console.log(res.data); return res.data._id}) //return the user id in the response
    .then(userId => { //this 'then' receieves the user id as parameter
      return axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/wishlist`,
        data: { id: bookId }, //the server expects a json in the format { id: 'some_book_id'}
        withCredentials: true
      })
    })
    .then((res) => { setNotificationText('Book added to wishlist'); setOpenNotification(true)})
  }

  const addToMyBooks = () => {
    axios({
      method: 'get', //first get the connected user information from the server
      url: `${process.env.REACT_APP_SERVER}/api/current_user`,
      withCredentials: true
    })
    .then(res => { console.log(res.data); return res.data._id}) //return the user id in the response
    .then(userId => { //this 'then' receieves the user id as parameter
      return axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/api/users/${userId}/books`,
        data: { id: bookId }, //the server expects a json in the format { id: 'some_book_id'}
        withCredentials: true
      })
    })
    .then((res) => { setNotificationText('Book added to your book list');  setOpenNotification(true)})
  }

  return (
    <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/AllReviews" label="Reviews" icon={<RestoreIcon />} />
      <BottomNavigationAction label="WishList" icon={<FavoriteIcon />} onClick={addToWishlist} />
      <BottomNavigationAction label="Add" icon={<LocationOnIcon />} onClick={addToMyBooks}/>
    </BottomNavigation>
    {/* snackbar is used to notify the user for something, as a small popup */}
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openNotification}
        autoHideDuration={1000}
        message={notificationText}
        onClose={e => setOpenNotification(false)}
      />
    </>
  );
}
