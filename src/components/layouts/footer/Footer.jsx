import {React} from 'react';
import useStyles from './styles';

// components material ui
import { Typography, List, ListItem, ListItemIcon, Divider} from '@material-ui/core';
// icons
import {DiPhp, DiJavascript1} from "react-icons/di";
import {SiCss3,SiMysql, SiRust} from "react-icons/si";

// utils 
import { createData } from '../../../_services/utils';

const rows = [
    createData("CSS",<SiCss3 /> ,"https://developer.mozilla.org/fr/docs/Web/CSS"),
    createData("Javascript", <DiJavascript1/>, "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
    createData("PHP",<DiPhp/> ,"https://www.php.net/manual/fr/intro-whatis.php"),
    createData("SQL", <SiMysql/>, "https://sql.sh/"),
    createData("Rust", <SiRust />,"https://jimskapt.github.io/rust-book-fr/")
];

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>            
            <section className={classes.blockDocumentation}>
                <List component="nav" className={classes.blockList}>
                    <Typography component='h4' className={classes.subtitle}>Documentation officielle</Typography>
                    <div className={classes.contentList}>    
                    {rows.map((row, k) => (
                        <ListItem button key={k} className={classes.list} data-font={row.name}>
                            <a target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                                href={row.content}
                            >
                                <ListItemIcon className={classes.logo}>
                                    {row.component}
                                </ListItemIcon>
                            </a>
                        </ListItem>
                    ))}
                    </div>
                </List>
                <Divider className={classes.divider}/>
                <div className={classes.blockMention}>
                    <Typography className={classes.subtitle} component='h4'> Mention Legal</Typography>
                    <Typography component='p' className={classes.paragraph}>
                        Plateforme type mémo, tout les exemples sont de mes soins, appuyée par la documentation et tester en amont en local. Le code n'as pas
                        de propriétée proprement parlée, si le code vous aide tant mieux.
                    </Typography>

                    <Typography component='h3' className={classes.subtitle}>Hébergeur :</Typography>
                    <Typography component='p' className={classes.paragraph}>
                        ce site est hébergé par la société à responsabilité limitée ALWAYSDATA, ayant son siège social au 91 rue du Faubourg Saint-Honoré, 75008 Paris (tél. +33 1 84 16 23 40).
                    </Typography>
                </div>
                <Divider className={classes.divider}/>
                <div className={classes.blockMention}>
                    <Typography className={classes.subtitle} component='h4'>Copyright © 2023 LSequoias MIT</Typography>
                </div>
            </section>
        </footer>
    )
}


export default Footer;