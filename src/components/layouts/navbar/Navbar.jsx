
import React, {useState} from 'react';
// router
import {Link} from 'react-router-dom';
// Material UI..
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

// React Icons
import {FaCss3, FaPhp, FaJs, FaRust} from 'react-icons/fa';
import { SiMysql } from "react-icons/si";

const Navbar = () => {

  const classes = useStyles();

  // etat pour menu principal
  const [ancre, setAncre] = useState(null);

  // etat pour menu php
  const [aPhp, setAPhp] = useState(null);

  // etat pour menu php
  const [asql, setAsql] = useState(null);

  // etat pour menu css
  const [acss, setAcss] = useState(null);

  // etat pour menu js
  const [ajs, setAjs] = useState(null);

  // etat pour le menu rust
  const [arust, setArust] = useState(null);

  // event menu
  const handleMenu = e => {
    // checker findDomNode || bouger le mode Strict
    setAncre(e.currentTarget);
  };

  const handlePhp = e => {
    setAPhp(e.currentTarget);
  };

  const handleCss = e => {
    setAcss(e.currentTarget);
  };

  const handleJs = e => {
    setAjs(e.currentTarget);
  };

  const handleSql = e => {
    setAsql(e.currentTarget);
  };

  const handleRust = e => {
    setArust(e.currentTarget);
  }

  const handleClose = () => {
    setAncre(null);
    setAPhp(null);
    setAcss(null);
    setAjs(null);
    setAsql(null);
    setArust(null);
  }

  // render
  return (
    <AppBar className={classes.header}>
      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleMenu}
          edge="start"
          aria-label="menu">
          <MenuIcon/>
        </IconButton>

        <Menu id="simple-menu" anchorEl={ancre} keepMounted open={Boolean(ancre)} onClose={handleClose} className={classes.menu}>

          <MenuItem onClick={handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleCss}
          edge="start"
          aria-label="menu">
          <FaCss3/>
        </IconButton>
        <Menu id="simple-menu" anchorEl={acss} keepMounted open={Boolean(acss)} onClose={handleClose} className={classes.menu}>
          <MenuItem onClick={handleClose}>
            <Link to="/base-css">Notions de CSS</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/css-intermediaire">Maitrise du CSS</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/scss">Scss</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleJs}
          edge="start"
          aria-label="menu">
          <FaJs/>
        </IconButton>
        <Menu id="simple-menu" anchorEl={ajs} keepMounted open={Boolean(ajs)} onClose={handleClose} className={classes.menu}>
          <MenuItem onClick={handleClose}>
            <Link to="/base-javascript">Base de javascript</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/js-intermediaire">javascript intermédiaire</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/js-avancer">javascript avancé</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handlePhp}
          edge="start"
          aria-label="menu">
          <FaPhp/>
        </IconButton>
        <Menu id="simple-menu" anchorEl={aPhp} keepMounted open={Boolean(aPhp)} onClose={handleClose} className={classes.menu}>
          <MenuItem onClick={handleClose}>
            <Link to="/base-php">Base de PHP</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/php-intermediaire">PHP intermédiaire</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/php-avancer">PHP avancé</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleSql}
          edge="start"
          aria-label="menu">
          <SiMysql/>
        </IconButton>
        <Menu id="simple-menu" anchorEl={asql} keepMounted open={Boolean(asql)} onClose={handleClose} className={classes.menu}>
          <MenuItem onClick={handleClose}>
            <Link to="/base-sql">Base de SQL</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/sql-intermediaire">SQL intermédiaire</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Toolbar variant="dense">
        <IconButton className={classes.icon}
          onClick={handleRust}
          edge="start"
          aria-label="menu">
          <FaRust/>
        </IconButton>
        <Menu id="simple-menu" anchorEl={arust} keepMounted open={Boolean(arust)} onClose={handleClose} className={classes.menu}>
          <MenuItem onClick={handleClose}>
            <Link to="/base-rust">Base avec Rust</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar;
