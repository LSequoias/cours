import React from 'react';
import {makeStyles} from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
const useStyles = makeStyles((theme) => ({
  embed : {
    padding : 0,
    lineHeight: '1.5rem',
    transition: 'all .33s',
    boxShadow: '2px 2px 4px #111',

    '&:hover' : {
      transform: 'scale(1.1)',
    },
  },

}));

export const BaseJs = () => {
  const classes = useStyles();
    const codeString = `
      var nombre = 3;
      let nombre = 5;
      const minVal = 8;
    `;
    return (
      <SyntaxHighlighter language="js" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const TypeJs = () => {
  const classes = useStyles();
    const codeString = `
      var nombre = 9;
      var nombre = "neuf";
      console.log(nombre);
      
      js (hors nodeJs) est séquentielle,\n \tnombre deviendras "neuf" au lieu de 9, au final
    `;

    return (
      <SyntaxHighlighter language="js" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const TJs = () => {
  const classes = useStyles();
    const codeString = `
      h1, h2, h3 : {
        color: navy;
        font-size: 1.5rem;
      }
    `;

    return (
      <SyntaxHighlighter language="js" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}
