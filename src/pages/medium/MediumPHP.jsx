import React from 'react';
import { SyntaxePhp,
  SyntaxePhp2,
  ForeachAndCtl, 
  ForeachWithPhp, 
  PDOWithPhp,
  ExpLayouts,
  FormEmbed,
  FormEmbed2,
  FormEmbed3,
  FormEmbed4,
  FormEmbed5,
  FormEmbed6,
  FormEmbed7,
  FormEmbed8,
  ChargeurPHP
} from '../../components/embed/EmbedPhp';
// Material ui
import {makeStyles, Paper, Typography, Link, Card, CardMedia, List, ListItem} from '@material-ui/core';
// components
import Layout from '../../components/layouts/Layout';
import data from '../../routes/data.json';

const useStyles = makeStyles((theme) => ({
  spacing: 1,
  paper : {
    marginBottom: '1rem',
    padding: `${theme.spacing(0.5)}rem`,
    '& > h4' : {
      //for title
      paddingBottom : `${theme.spacing(0.2)}rem`,
    },
    '& h3': {
      textDecoration: 'underline',
      marginBottom : '1rem',
      color: '#555',
    },
    '& .query, .attr, .fn, .var' : {
      fontWeight: '600',
    },
    '& .query' : {
      color: '#f50057', // crimson
    },
    '& .attr' : {
      color:'rgb(86, 128, 9)', // green
    },
    '& .fn' :  {
      color: 'teal',
    },
    '& .var' : {
      color: '#007cff',
    }
  },
  listExemple: {
    width:'50%',
    minWidth:'max-content',
    margin: `2rem 0 2rem ${theme.spacing(0.3)}rem `,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: '3px 3px 3px 1px rgba(0, 0, 0, 0.12)',
    },
    card: {
        padding:'1rem',
        margin: '1rem 0'
    }
}));

const {php} = data;

const PartPhp = data => {

    const classes = useStyles();
  
    return (
      <Layout data={php}>
        <Typography id="tiers0">avanced</Typography>

      </Layout>
    )
  }
  
  export default PartPhp;