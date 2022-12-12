import React from 'react';
import { SyntaxePhp,ChargeurPHP

} from '../../components/embed/EmbedPhp';
// Material ui
import {makeStyles, Paper, Typography,Card} from '@material-ui/core';
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
    '& > h2' : {
      //for subtitle
      margin : `${theme.spacing(0.2)}rem 0 `,
    },
    title : {
      fontFamily : 'Verdana',
      paddingBottom: '1rem',
    },
    '& h3': {
      textDecoration: 'underline',
      margin : '2rem 0',
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

const MediumPHP = data => {

    const classes = useStyles();
  
    return (
      <Layout data={php}>
        <Paper elevation={1} className={classes.paper}>
          <Typography component="h2" variant="h4" id="tiers0" className={classes.title}>PHP intermédiaire</Typography>
          <Typography paragraph>Cette partie traiteras la programmation orientée Objet.</Typography>
          <Typography component="h3" variant="h5" className={classes.title}>Début de la programmation orientée Objet</Typography>

          <SyntaxePhp/>
          <Card>
            <Typography paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, reprehenderit?</Typography>
          </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers6">Chargeur de class en natif</Typography>
          <Typography paragraph>
            Chargeur automatique de class php
          </Typography>
          <ChargeurPHP/>
          <Card className={classes.card}>
            <Typography paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, distinctio.
            </Typography>
          </Card>
        </Paper>
      </Layout>
    )
  }
  
  export default MediumPHP;