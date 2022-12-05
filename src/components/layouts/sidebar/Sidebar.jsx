import React, {useState} from 'react';

// Material UI
import {
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Collapse} from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from './styles';


const Sidebar = ({data}) => {


  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick  = () => {
    setOpen(!open);
  }

  // init array
  const listBegin = [], listMiddle = [], listAvancer = [];

// 1eme grap nested
data.begin.chapter.forEach((item, i) => listBegin.push(
    <ListItem key={i} button className={classes.nested}>
      <ListItemIcon className={classes.icon}/>
      <ListItemText>
        <Link href={`${data.begin.anchor}`+i} className={classes.link}>{item}</Link>
      </ListItemText>
    </ListItem>
));

// 2eme grap nested
data.middle.chapter.forEach((item, k) => listMiddle.push(
    <ListItem key={k} button className={classes.nested}>
      <ListItemIcon className={classes.icon}/>
      <ListItemText>
        <Link href={`${data.middle.anchor}`+k} className={classes.link}>{item}</Link>
      </ListItemText>
    </ListItem>
));

// 3eme grap nested
data.avancer.chapter.forEach((item, k) => listAvancer.push(
    <ListItem key={k} button className={classes.nested}>
      <ListItemIcon className={classes.icon}/>
      <ListItemText>
        <Link href={`${data.avancer.anchor}`+k} className={classes.link}>{item}</Link>
      </ListItemText>
    </ListItem>
));

// passer les graps dedans
const display = ([param]) => (
   <ListItemText>{param}</ListItemText>
)

  return(
    <List component="nav"
      className={classes.root}
      subheader={
      <ListSubheader
        component="h1"
        disableSticky
        className={classes.heading}>
        Index
      </ListSubheader>
      }>

      <ListItem button onClick={handleClick}>
        <ListItemIcon className={classes.icon}>
          <CodeIcon/>
        </ListItemIcon>
        <ListItemText primary={data.begin.heading}/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            {display([listBegin])}
          </List>
        </Collapse>


      <ListItem button onClick={handleClick}>
        <ListItemIcon className={classes.icon}>
          <CodeIcon/>
        </ListItemIcon>
        <ListItemText primary={data.middle.heading}/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            {display([listMiddle])}
          </List>
        </Collapse>


      <ListItem button onClick={handleClick}>
        <ListItemIcon className={classes.icon}>
          <CodeIcon/>
        </ListItemIcon>
        <ListItemText primary={data.avancer.heading}/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            {display([listAvancer])}
          </List>
        </Collapse>

      </List>
  )
}

export default Sidebar;
