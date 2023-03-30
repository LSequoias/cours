

### Plateforme de cours / Mémo

Cette platform est un recensé de toute les compétences acquises avec le temps, forcément elle n'est jamais terminer et je l'avance lorsque j'ai un peu de temps pour moi. Le site tourne sans base de donnée, tout est gérée à l'aide de [React](https://github.com/facebook/react/blob/main/CHANGELOG.md#1701-october-22-2020) et son écosystème.

#### Dépendances particulières :
[Material UI](https://v4.mui.com/fr/getting-started/supported-components/) est sur ce projet mais en version 4.

[React Icon](https://react-icons.github.io/react-icons/) pour les icons liée aux technologies.

[React Syntax Hightlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) permet de crée des snippet de code formatée selon les langages spécifiques.

### Fonctionnement des snippets
```js
    // .. > embed > monEmbed.jsx
    import {makeStyles} from '@material-ui/core';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const SyntaxePhp = () => {
        const classes = useStyles();
        const codeString = `
            <?php
                echo "afficher quelque chose.";
                $mavariable = (string) "une prase d'acroche pour ce Blog :";
            ?>
        `;
        return (
            <SyntaxHighlighter language="php" style={monokaiSublime} className={classes.embed}>
                {codeString}
            </SyntaxHighlighter>
        )
    }

    // .. > pages / TaPage.jsx 

    import { SyntaxePhp, AutreSnippet} from './folder/embed/monEmbed.jsx';

    const TaPage = () => {
        const classes = useStyles(); // Style component
  
        return (
            <Layout data={php}>
                <Paper elevation={1} className={classes.paper}>
                    <SyntaxePhp/>
                </Paper>
            </Layout>
        )
    }
    export default TaPage;
```

### La sidebar, le Schema
#### L'ojet JSON

La sidebar fonctionne avec un objet json, c'est plus malléable. Pour rappel aucune base de donnée est liée toutefois il est possible d'utilisée un Schema de donnée pour cette objet json par le biais de [Mongoose](https://mongoosejs.com) ou encore à l'aide d'une interface [Typescript](https://www.typescriptlang.org).
```json
{
  "_comment" : "sert à la sidebar",
  "css" : {
    "begin" : {
      "heading" : "Base",
      "chapter" : [
        "Utilisation du CSS",
        "Les selecteurs CSS"
      ],
      "anchor" : "/base-css#tiers"
    },
    "middle" : {
      "heading" : "Intermédiaire",
      "chapter" : [
        "grid",
        "poids de selecteurs",
        "cssTrigger"
      ],
      "anchor" : "/css-intermediaire#tiers"
    },
    "avanced" : {
      "heading" : "Scss",
      "chapter" : [
        "les préprocesseurs"
      ],
      "anchor" : "/scss#tiers"
    }
  },
  //... on rajoute un autre document au besoin d'une autre section.
}
```
*heading* : Sert de séparation pour les niveaux de difficultée.  
*chapter* : Contient un tableau <String[]> définissant les chapitres de chaque difficultée.  
*anchor* : Permet de crée des ancrages liée à chacune des pages.  

### La Sidebar, mécanique par grab
La sidebar repose sur plusieurs composants enfant, certain sont liée à Material ui et ne seront pas exposée ou expliquée pour le coup, gardé en mémoire que les dépendances doivent être initialisée plus haut pour pouvoir être utilisée dans certain composant.
```jsx

const Sidebar = ({data}) => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick  = () => {
    setOpen(!open);
  }

  // initialisation des tableaux
  const listBegin = [], listMiddle = [], listAvancer = [];

    // 1eme grap nested
    data.begin.chapter.forEach((item, i) => listBegin.push(
        <ListItem key={i} button className={classes.nested}>
        <ListItemIcon className={classes.icon}/>
            <ListItemText>
                <Link href={`${data.begin.anchor}`+i} className={classes.link}>{item}</Link>
            </ListItemText>
        </ListItem>
    ));

    // passer les graps dedans
    const display = ([param]) => (
        <ListItemText>{param}</ListItemText>
    )

    return(
        <List component="nav"
        className={classes.root}
        subheader={
            <ListSubheader
                component="h1"
                disableSticky
                className={classes.heading}>
                Index
            </ListSubheader>
            }>

        <ListItem button onClick={handleClick}>
            <ListItemIcon className={classes.icon}>
                <CodeIcon/>
            </ListItemIcon>
            <ListItemText primary={data.begin.heading}/>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="ul" disablePadding>
                {display([listBegin])}
            </List>
        </Collapse>

        {/*reproduire la même chose pour chaque section aux besoins.*/}
    </List>
    )
}
export default Sidebar;
```
Bien sur il existe d'autre façon de faire et certainnement plus propre. Pour le coup cette façon répond à mes besoins pour la plateforme.

En faisant de cette façon vous générée des sections (facile - moyen - difficile - etc) pour chaque langages de chaque page associée. L'objet Json derrière permet la souplesse ainsi vous pouvez éditée chaque chapitre indépendament de chaque section.

Toutefois, pour que cela puisse fonctionner il vous reste une dernière étape, injectée les data dans les pages concernée.

### Injection des données dans les pages

```jsx
    
    // ont récupére la grap qui nous interessent via la destructuration
    const {rust} = data;

    const PartRust = data => {

        const classes = useStyles();

        return (
            // ainsi la sidebar seras liée au Layout
            <Layout data={rust}>
                <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h4" id="tiers0">Introduction</Typography>
                </Paper>
            </Layout>
        )
    }

```


