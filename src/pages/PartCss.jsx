import React from 'react';

import {
  UtilisationBasic, 
  LinkCSS,
  OrdreCSS,
  SelectorCSS
} from './../components/embed/EmbedCss';

// Material ui
import {makeStyles, Paper, Typography, Card} from '@material-ui/core';

// components
import Layout from './../components/layouts/Layout';
import data from './../routes/data.json';

const useStyles = makeStyles((theme) => ({
  spacing: 1,
  paper : {
    marginBottom: '1rem',
    padding: `${theme.spacing(0.5)}rem`,
    '& > h4' : {
      //for title
      paddingBottom : `${theme.spacing(0.2)}rem`,
    },
    '& p b' : {
        color: '#f50057',
    },
    '& p .sec' : {
        color: "#2e6ade",
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


const {css} = data;

const PartCss = data => {

  const classes = useStyles();

  return (
    <Layout data={css}>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h4" id="tiers0">Utilisation du CSS</Typography>
        <Typography paragraph>
          Le CSS permet de donnée du style au site à l'aide de couleurs, de mise en page. Ce n'est pas un langage de programation mais
          il reste dans les langages informatiques incontournable pour faire un site web, pour le peu que l'ont souhaite qu'il soit esthétique.
          Nativement, le CSS est compris par le navigateur web, vous n'avais pas besoin d'installée quoique se soit pour qu'il soit fonctionnel.
        </Typography>
        <Typography paragraph>
          Le CSS peu s'écrire directement depuis votre page html, qu'il soit déclarée dans la balise <b>&lt;head&gt;</b> à l'aide d'une
          balise <b>&lt;style&gt;</b> ou bien directement dans le DOM en inline (voir l'exemple avec le paragraphe lorem) ces deux méthodes
          sont dépréciées. Déclarée depuis le DOM en inline cela ne donne pratiquement plus la possibilitée de changer ce CSS ultérieurement si un autre 
          développeur se penche sur le CSS derières, car déclarée le CSS directement dans le DOM donne à ce CSS une prioritée absolut sur les autres 
          régles en paralléle. Enfin écrire les règles CSS via le <b>&lt;head&gt;</b> est une mauvaise pratique car votre page risque vite de 
          devenir illisible, en effet si le CSS est rarement apprécier c'est parce que ce dernier est très chronophage et il n'est pas rare d'avoir
          un projet avec 2000 ligne de CSS pur, ont évite de mélangée l'Html et le CSS ensemble pour ne pas perdre des points de santée mentale.
        </Typography>
        <UtilisationBasic/>
        <Card className={classes.card}>
          <Typography paragraph>
            Un autre façon d'utilisée le CSS consisterais à l'appelée depuis un fichier que l'ont place au niveau du <b>&lt;head&gt;</b>
          </Typography>
        </Card>
        <LinkCSS/>
        <Card className={classes.card}>
          <Typography paragraph>
            L'idéal est de placer vos feuilles de CSS via un dossier CSS. Cette architecture est courrante pour placer vos scripts et feuilles CSS de façon propre.
          </Typography>
        </Card>
        <OrdreCSS/>
        <Card className={classes.card}>
          <Typography paragraph>
            L'ordre à son importance, classiquement sur un site : il faut placer vos meta données en premier temps. Puis vos fichiers javascript et enfin 
            vos fichier css.
          </Typography>

          <Typography paragraph>
            Les premiers liens CSS appels des ressources externes aux projets, c'est ressources ne sont pas présentes physiquements dans le projet mais
            accessible depuis un serveur distant (c'est le principe des CDN). Ces liens ont besoins d'être placer en premier pour être executée correctement, d'où leurs
            emplacement, vient ensuites nos feuilles CSS, l'une fait partie d'un framework CSS et l'autre est la feuille qui nous interesse. Les scrips javascript ont le même fonctionnement, ressources extérieur en premier et ressource local
            ensuite.
          </Typography>
        </Card>
      </Paper>

      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h4" id="tiers1">Les selecteurs CSS</Typography>
        <Typography paragraph>Une liste non exhaussif des selecteurs courrants en CSS.</Typography>
        <SelectorCSS/>
      </Paper>
    </Layout>
  )
}

export default PartCss;
