import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import useStyles from "./styles";

export const UtilisationBasic = () => {
  const classes = useStyles();
    const codeString = `
  <!doctype html>
  <html lang="fr">
    
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon superbe site | Accueil</title>
    <style>
      body {
        background-color: purple;
      }
      .title {
        font-size:1.5rem;
      }
    </style>
  </head>
  
  <body>
    <h1 class="title">mon titre de la page</h1>
    <p style="color:red">lorem ipsum...</p>
  </body>
`;
    return (
      <SyntaxHighlighter language="html" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const LinkCSS = () => {
  const classes = useStyles();
    const codeString = `
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="assets/css/style.css">
  <title>Mon superbe site | Accueil</title>
</head>
    `;

    return (
      <SyntaxHighlighter language="html" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}

export const OrdreCSS = () => {
  const classes = useStyles();
    const codeString = `
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <script type="text/javascript" defer src="assets/js/materialize.min.js"></script>
  <script type="text/javascript" defer src="assets/js/app.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/lib/materialize.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Mon superbe site | Accueil</title>
</head>
    `;

    return (
      <SyntaxHighlighter language="html" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
    )
}


export const SelectorCSS = () => {
  const classes = useStyles();
    const codeString = `
  h1, h2, h3 {
    text-decoration:underline;
  }

  .title {
    font-size:1.8rem;
    color:navy;
  }
  .subtitle {
    font-size:1.5rem;
    color:yellowgreen;
  }
  
  #ancreTitle3 {
    font-size:1.2rem;
    color:#ff0000;
  }
  `;
  return (
    <SyntaxHighlighter language="css" style={monokaiSublime} className={classes.embed}>
      {codeString}
    </SyntaxHighlighter>
  )
}
