import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// components features
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import Footer from './footer/Footer';


const useStyles = makeStyles((theme) => ({
  root : {
    paddingTop: `${theme.spacing(1)}rem`,
    justifyContent: 'center',
    transform: 'translate(0)'
  },
  content: {
    margin: `0 ${theme.spacing(0.15)}rem`,
    backgroundColor: 'whitesmoke',
    [theme.breakpoints.between('xs', 'lg')]: {
      margin: 0,
    }
  },
  sidebar : {
    backgroundColor: '#111',
  },

}));



const Layout = ({children, data}) => {

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3} sm={4} md={3} lg={3} className={classes.sidebar}>
          <Sidebar data = {data || ""} />
        </Grid>

        <Grid item xs={9} sm={8} md={8} lg={8} className={classes.content}>
          <Main>
            {children}
          </Main>
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

export default Layout;
