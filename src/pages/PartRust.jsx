import {makeStyles, Paper, Typography} from '@material-ui/core';
// components
import Layout from './../components/layouts/Layout';
import data from './../routes/data.json';

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
                <Typography variant="h4" id="tiers1">Introduction</Typography>
            </Paper>
        </Layout>
    )
}

export default PartRust;