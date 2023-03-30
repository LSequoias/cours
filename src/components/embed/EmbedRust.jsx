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

export const BaseRust1 = () => {
  const classes = useStyles();
    const codeString = `
    let animaux = "chien";
    let mut autre_animaux = "chèvre";
    autre_animaux = "poisson"

    const FAMILLE = "mammifère";
    `;
    return (
      <SyntaxHighlighter language="rust" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const BaseRust2 = () => {
    const classes = useStyles();
      const codeString = `
      let mut autre_animaux = "chèvre";
  
      `;
      return (
        <SyntaxHighlighter language="rust" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
      )
  }