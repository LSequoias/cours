

### Plateforme de cours / Mémo

Cette platform est un recensé de toute les compétances acquise avec le temps. Le site tourne sans base de donnée, tout est gérée à l'aide de [React](https://github.com/facebook/react/blob/main/CHANGELOG.md#1701-october-22-2020).

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

