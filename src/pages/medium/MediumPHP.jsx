import React from 'react';
import { SyntaxePhp,ChargeurPHP

} from '../../components/embed/EmbedPhp';
// Material ui
import {Paper, Typography,Card} from '@material-ui/core';
// components
import Layout from '../../components/layouts/Layout';
import data from '../../routes/data.json';

import useStyles from "./../styles";


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