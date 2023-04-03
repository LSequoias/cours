import React from 'react';
import { SyntaxePhp

} from '../../components/embed/EmbedPhp';
// Material ui
import { Paper, Typography,Card} from '@material-ui/core';
// components
import Layout from '../../components/layouts/Layout';
import data from '../../routes/data.json';

import useStyles from "./../styles";

const {sql} = data;

const MediumSQL = data => {

    const classes = useStyles();
  
    return (
      <Layout data={sql}>
        <Paper>
          <Typography id="tiers0">SQl intermédiaire</Typography>
          <SyntaxePhp/>
          <Card>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, reprehenderit?</Typography>
          </Card>
        </Paper>

      </Layout>
    )
  }
  
  export default MediumSQL;