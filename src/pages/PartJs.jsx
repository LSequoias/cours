import React from 'react';
import {BaseJs, TypeJs} from './../components/embed/EmbedJs';
// Material ui
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


const {js} = data;

const PartJs = data => {

  const classes = useStyles();

  return (
    <Layout data={js}>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h4" id="tiers0">Introduction</Typography>
        <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit harum cupiditate reprehenderit accusamus animi, esse maxime veritatis odit accusantium dolorum qui tempora perferendis quaerat voluptatem, sunt itaque vero ea! Dolore aperiam distinctio voluptas quae ad, unde repellat et illum tempore debitis, deserunt minima sequi. Dolorum reiciendis similique dolores ut unde, recusandae cupiditate ex odio nihil possimus, minima vero eligendi animi perferendis nulla eius dolore architecto! Molestiae facere vero voluptate aperiam ea in quod nulla molestias vel. Nam quos fugiat consequuntur, voluptatum placeat ab dolores minima quaerat soluta, alias, reiciendis qui! Magni quo doloremque veniam excepturi, laborum laboriosam, vero numquam.
        </Typography>
        <Typography variant="h4" id="tiers1">Les bases :</Typography>
        <Typography paragraph>Stocker des informations dans les variables sont indispensables pour faire fonctionnais un Script, en JavaScript voici les mots clef pour à utiliser pour stocker des données.</Typography>
        <BaseJs />
        <Typography paragraph>
          <b>var</b> est une variable globale, c'est à dire qu'elle accessible partout dans votre application.
        </Typography>
        <Typography paragraph>
          <b>let</b> est une variable locale, ont l'utilises dans les fonctions et sa portée est limitée à cette dernière.
        </Typography>
        <Typography paragraph>
          <b>const</b> est une variable qui ne changeras jamais tout le long de votre application. Leurs portées est globale.
        </Typography>
        <Typography variant="h5" id="tiers1">Une histoire de portée :</Typography>
        <Typography paragraph>
          Les portées aussi appelée <b>Scope</b> indique donc si la données est accessible ou non selon la situation. Si une variable globale vous offres le confort d'accédait a son contenue n'importe où, cela peut être aussi à double tranchant, il vous suffit d'appelée cette même variable puis de changer sa valeur pour vous rendre compte du problème.
        </Typography>
        <TypeJs/>
        <Typography paragraph>
          Le fait que JavaScript est un <b>typage faible</b> vous donne la possibilitée de passer pratiquement n'importe quoi dans vos variables, notée aussi que Js est sensible au <b>transTypage</b> c'est à dire la possibilitée de passer d'un type à un autre.
        </Typography>

      </Paper>
    </Layout>
  )
}

export default PartJs;
