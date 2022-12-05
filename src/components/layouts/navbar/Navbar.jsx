
import React, {useState} from 'react';
// router
import {Link} from 'react-router-dom';
// Material UI..
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';


const Navbar = () => {

  const classes = useStyles();
  const [ancre, setAncre] = useState(null);

  const handleClick = e => {
    // checker findDomNode || bouger le mode Strict
    setAncre(e.currentTarget);
  };

  const handleClose = () => {
    setAncre(null);
  }

  // render
  return (
    <AppBar className={classes.header}>
      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleClick}
          edge="start"
          aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h3" color="secondary">Mémo et exo</Typography>

        <Menu id="simple-menu" anchorEl={ancre} keepMounted open={Boolean(ancre)} onClose={handleClose} className={classes.menu}>

          <MenuItem onClick={handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/part-css">Css & Scss</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/part-php">PHP</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/part-sql">SQL</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/part-javascript">javascript</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>


  )
}

export default Navbar;
