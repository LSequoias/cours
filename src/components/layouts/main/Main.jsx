import React from 'react';

import useStyles from './styles';


const Main = ({children}) => {

  const classes = useStyles();

  return (
      <main className={classes.root}>
        {children}
      </main>
  )
}

export default Main;
