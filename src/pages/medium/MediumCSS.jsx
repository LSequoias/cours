import React from 'react';
import { SyntaxePhp

} from '../../components/embed/EmbedPhp';
// Material ui
import {Paper, Typography,Card} from '@material-ui/core';
// components
import Layout from '../../components/layouts/Layout';
import data from '../../routes/data.json';

import useStyles from "./../styles";

const {css} = data;

const MediumCSS = data => {

    const classes = useStyles();
  
    return (
      <Layout data={css}>
        <Paper>
          <Typography id="tiers0">Maitrise du CSS</Typography>
          <SyntaxePhp/>
          <Card>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, reprehenderit?</Typography>
          </Card>
        </Paper>

      </Layout>
    )
  }
  
  export default MediumCSS;