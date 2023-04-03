import React from 'react';
import {makeStyles} from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useStyles from "./styles";


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