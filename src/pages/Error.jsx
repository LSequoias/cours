import React from 'react';
// Material ui
import {Grid, Paper, Typography, Card, CardMedia} from '@material-ui/core';

import useStyles from "./styles";


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
