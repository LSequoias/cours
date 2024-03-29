import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
// materia ui
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography
} from '@material-ui/core';

import useStyles from "./styles";

// services
import { createData } from '../_services/utils';


import {AiOutlineConsoleSql} from "react-icons/ai";
import {DiPhp} from "react-icons/di";
import {RxGear} from "react-icons/rx";
import {FaRust} from "react-icons/fa";





const rows = [
  createData("Section basique SQL réalisée", <AiOutlineConsoleSql />, "select, insert, update, foreign key, jointure"),
  createData("Section basique php en cours", <DiPhp/>,"base, template, formulaire"),
  createData("Legère refonte", <RxGear/>,"mise en valeur des termes importants"),
  createData("changement d'architecture du site", <RxGear/>, "allégement des sections de cours"),
  createData("Fin de la partie procédural en PHP", <DiPhp/>, "formulaire en procédural"),
  createData("Section basique Rust", <FaRust/>, "Introduction"),
  createData("Mise à jour du site", <RxGear/>, "refonte du footer")
];

const Home = () => {

  const classes = useStyles();

  return (

    <Grid component={Paper} className={classes.root} item sm={8} md={7} lg={7}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="image de skill"
            src={process.env.PUBLIC_URL+ '/media/images/home_00.jpg'}
            >
          </CardMedia>
          <CardContent className={classes.CardContent}>
            <Typography component="h2" variant="h4" className={classes.title}>B'soir !!</Typography>

            <Typography component="h3" variant="h5" className={classes.title}>Que contient ce site :</Typography>
            <Typography component="p" variant="body1" className={classes.paragraph}>
              Ce site contient des exemples, des tips s'appuyant sur la documentation officielle des langages et technologies liée au 
              développement web. Tous les exemples ont était réaliser par mes soins et tester en local pour assurée leurs fonctionnement.
              Ces codes ne sont pas soumis à un quelconque droit d'auteur, je part du simple principe que la programmation est quelques choses 
              qui se partages et, si vous y trouvez votre bonheur tant mieux.
            </Typography>
          </CardContent>

          <CardContent className={classes.CardContent}>
            <Typography component="h3" variant="h5" className={classes.title}>À qui s'adresse ce contenue : </Typography>
            <Typography component="p" variant="body1" className={classes.paragraph}>
              L'idée etait d'aidée des collègues en proposant une approche différentes des langages, le site propose des explications et un processus de 
              reflexion sur chacun des exemples citée. Si vous êtes simple visiteur à vous de juger se qui est bon à prendre ou non. Mais gardez à l'esprit 
              que ce site ne remplaceras jamais une documentation officielle. 
            </Typography>
          </CardContent>

          <CardContent className={classes.CardContent}>
            <Typography component="h3" variant="h5" className={classes.title}>Comment utilisée ce site : </Typography>
            <Typography component="p" variant="body1" className={classes.paragraph}>
              Il y a une barre de navigation en haut de la page, cliquez sur les logos des différentes technologies pour y voir apparaitre des 
              sections propre à la technologie. Chaque section à sa sidebar (navigation latérale) dédiez, ainsi le contenue varies selon les thèmes abordée. 
            </Typography>
          </CardContent>

          <CardContent className={classes.CardContent}>
            <Typography component="h3" variant="h5" className={classes.title}>Qui gère ce site : </Typography>
            <Typography component="p" variant="body1" className={classes.paragraph}>
              Je suis le seul gérant de ce site pour l'instant, si vous aviez vue le "B'soir" plus haut je pense que vous avez une idée de qui je suis.
              Pour le reste il ne met pas nécessaire de me présentée pas plus que ce qu'il vas suivre : Je suis un jeune en reconversion avec des 
              connaissances web ^^ Être seul à gérée le site prend du temps surtout pour mettre à jour ce site, les exemples sont chronophages et construire le site en lui même 
              demande tout autant de travail, d'ailleurs pour les curieux ce site est fait à l'aide de ReactJs et de Material UI sans aucune base de donnée derrière.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            className={classes.btnLink}
            component={RouterLink}
            to="/base-css"
            >Poursuivre vers le CSS ?
          </Button>
        </CardActions>

          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead className={classes.thead}>
              <TableRow>
                <TableCell className={classes.tableTitle}>Dernières Mise À jour de la plateforme</TableCell>
                <TableCell className={classes.tableTitle} align="center">Sujet</TableCell>
                <TableCell className={classes.tableTitle} align="right">Quoi de neuf ?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className={classes.type}>{row.component}</TableCell>
                  <TableCell align="right">{row.content}</TableCell>
                </TableRow>
              )).reverse()}
            </TableBody>
          </Table>
      </Card>
      </Grid>

  )
}

export default Home;
