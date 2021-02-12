import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/Add';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
  },
});

export default function BookButtons() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/AllReviews" label="Reviews" icon={<RestoreIcon />} />
      <BottomNavigationAction label="WishList" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Add" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
