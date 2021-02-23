import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import SwapHorizontalCircleTwoToneIcon from '@material-ui/icons/SwapHorizontalCircleTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';


export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    axios({
      url: `${process.env.REACT_APP_SERVER}/logout`,
      withCredentials: true
    }).then(() => history.push("/SignIn"))
  };

  return (
    <div style={{ position: 'fixed', right: '0', left: '0', bottom: '0', width: '100%', bottom: '0', backgroundColor: 'white' }}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip disableFocusListener title="Add">
            <div style={{ position: 'relative' }}>
              <MenuBookTwoToneIcon style={{ position: 'absolute', left: '35%' }} />
              <NavLink to="/Library" style={{textDecoration: 'none'}}>  <Button style={{ fontSize: '9px', textAlign: 'center' }}><br />Library</Button></NavLink>
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <div style={{ position: 'relative' }}>
              <LocalLibraryTwoToneIcon style={{ position: 'absolute', left: '35%' }} />
              <NavLink to="/MyBooks" style={{textDecoration: 'none'}}> <Button style={{ fontSize: '9px', textAlign: 'center' }}><br />My Books</Button></NavLink>
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <div style={{ position: 'relative' }}>
              <FavoriteTwoToneIcon style={{ position: 'absolute', left: '35%' }} />
              <NavLink to="/Wishlist" style={{textDecoration: 'none'}}> <Button style={{ fontSize: '9px', textAlign: 'center' }}><br />Wish List</Button></NavLink>
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <div style={{ position: 'relative' }}>
              <SwapHorizontalCircleTwoToneIcon style={{ position: 'absolute', left: '35%' }} />
              <NavLink to="/Myswaps" style={{textDecoration: 'none'}}> <Button style={{ fontSize: '9px', textAlign: 'center' }}><br />My Swaps</Button></NavLink>
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <div style={{ position: 'relative' }}>
              <ExitToAppTwoToneIcon style={{ position: 'absolute', left: '35%' }} />
              <Button style={{ fontSize: '9px', textAlign: 'center' }} onClick={handleLogout}><br />Logout</Button>
            </div>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
