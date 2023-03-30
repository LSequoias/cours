import {makeStyles, Paper, Typography} from '@material-ui/core';
// components
import Layout from './../components/layouts/Layout';
import data from './../routes/data.json';

import { BaseRust1 } from '../components/embed/EmbedRust';

const useStyles = makeStyles((theme) => ({
    spacing: 1,
    paper : {
      padding: `${theme.spacing(0.5)}rem`,
      '& > h4, h5' : {
        //for title
        paddingBottom : `${theme.spacing(0.2)}rem`,
      },
      '& p b' : {
        color: '#f50057',
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
  
  }));


const {rust} = data;

const PartRust = data => {
    const classes = useStyles();

    return (
        <Layout data={rust}>
            <Paper elevation={1} className={classes.paper}>
                <Typography variant="h4" id="tiers0">Introduction</Typography>
            </Paper>

            <Paper elevation={1} className={classes.paper}>
                <Typography variant="h4" id="tiers1">Les variables en Rust</Typography>
                <BaseRust1/>
                <Typography paragraph>
                    Rust oblige ces utilisateurs à déclarer les variables avec le mot clé <span className='query'>let</span>. 
                    Par defaut en Rust chaque variable est définit comme une constante ainsi il est n'est pas possible d'écraser 
                    le contenue d'une variable déclarée. Pour ce faire il faut le préciser en amont avec le mot clé <span className="query">mut</span>.
                    Notée aussi que Rust demande à se que les noms de variables soit écrit en snake_case et que, ce qui est déclarée comme une 
                    constance doit être en UpperCase.
                </Typography>
            </Paper>
        </Layout>
    )
}

export default PartRust;