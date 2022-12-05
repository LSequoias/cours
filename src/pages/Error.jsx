import React from 'react';
// material ui
import {Grid, Paper, Typography, makeStyles, Card, CardMedia} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacing: 1,
  root: {
    margin: `${theme.spacing(1)}rem auto`,
  },
  paper: {
    '& > h4': {
      color: '#f50057',
      padding:`${theme.spacing(0.1)}rem`,
    },
    '& *' : {
      backgroundColor: '#111',
    }
  },
  picture: {
    boxShadow: 'inset 3px 3px 5px 5px #333',
      backgroundColor: '#111',
  },
  card : {
    borderRadius: '0',
  }
}));


const Error = () => {

  const classes = useStyles();

  return (
    <Grid item xs={10} sm={8} className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" align="center">Oups, il semblerais que cette page n'existe pas..</Typography>
        <Card className={classes.card}>
          <CardMedia component="img"
            className={classes.picture}
            src={process.env.PUBLIC_URL+ '/media/images/404.jpg'}
            alt="impasse"/>
        </Card>
      </Paper>
    </Grid>
  )
}

export default Error;
