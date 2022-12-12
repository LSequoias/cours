import {React} from 'react';
import useStyles from './styles';
import { Typography,Avatar,  makeStyles} from '@material-ui/core';



const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography component='h3' className={classes.subtitle}>Mentions Légale</Typography>
            <section className={classes.card}>

                <Typography className={classes.subheader} gutterBottom component='h4'> Contenue du site :</Typography>
                <Typography component='p' className={classes.paragraph}>
                    Plateforme type mémo, tout les exemples sont de mes soins, appuyée par la documentation et tester en amont en local.
                </Typography>
                <Typography component='h3' className={classes.subtitle}>Hébergeur :</Typography>
                <Typography component='p' className={classes.paragraph}>
                    ce site est hébergé par la société à responsabilité limitée ALWAYSDATA, ayant son siège social au 91 rue du Faubourg Saint-Honoré, 75008 Paris (tél. +33 1 84 16 23 40).
                </Typography>
            </section>
        </footer>
    )
}


export default Footer;