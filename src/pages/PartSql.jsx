import React from 'react';
import {
    CreateDatabase, 
    AddData, 
    UpdateData,
    DeleteData,
    AlterTable,
    OrderByData,
    ForeignKey1,
    InnerJoin,
    InnerJoin2,
    Innodb
} from './../components/embed/EmbedSql';

// Material ui
import {makeStyles, Paper, Typography, List, ListItem, ListItemText, Divider, Card, CardMedia  } from '@material-ui/core';

// Material ui icon
import ErrorIcon from '@material-ui/icons/Error';

// components
import Layout from './../components/layouts/Layout';
import data from './../routes/data.json';


import useStyles from './styles';

const {sql} = data;

const PartSql = data => {

    const classes = useStyles();
  
    return (
      <Layout data={sql}>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers1">Initialisation à SQL</Typography>
          <Typography paragraph>
            <b>SQL</b> est un langage de programmation permettant de manippulée des données dynamiquement.
          </Typography>
          <CreateDatabase />
          <Card className={classes.card}>
            <Typography paragraph>
                <b>CREATE DATABASE</b> permet de crée une base de donnée.
            </Typography>

            <Typography paragraph>
                <b>CREATE TABLE</b> permet de crée une table.
            </Typography>
        </Card>
        <Card className={classes.card}>

            <Typography paragraph>
                Préciser product avec id vous aideras plus tard pour vous y retrouvez lors de vos jointures
                entre différente table. Ont définit une clée primaire sur cette colonne (ID_PRODUCT) cette clée 
                primaire permettras alors des nouveaux enregistrement de données, sans sa impossible de mettre à jour
                votre table, cette colonne ne doit donc jamais être sans valeur<b> NOT NULL</b>.
                                
                Enfin nous rajoutons une instruction de comportement à cette colonne avec <b> AUTO_INCREMENT </b> 
                qui signifie qu'a chaque nouvelle entrée de données la valeur de ce champs s'incrémente (+1).
                </Typography>

                <Typography paragraph>
                    <b>VARCHAR</b>(32) est comme INT, un type. VARCHAR équivaut à dire que cette colonne doit
                    contenir comme type un string, cette colonne peu donc prendre comme valeur : 
                </Typography>


                <List className={classes.listExemple}>
                    <ListItem>
                        <ListItemText primary="' b'soir !! '"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="' 0722428565 '"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="' ce n'est pas mon num cherche pas. '"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="' assets\image\noimage.png '"/>
                    </ListItem>
                </List>
            </Card>
            <Card className={classes.card}>
                <Typography paragraph>
                    Le type <b>FLOAT</b> est particulier, vous devez préciser le nombre de caractère total
                    avant la virgule, puis le nombre de caractère decimal après la virgule. Caractère est plus parlant qu'octet.
                    Exemple pour <b>FLOAT</b>(5,2) :
                </Typography>

                <List className={classes.listExemple}>
                    <ListItem>
                        <ListItemText primary="9.99"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="14.00"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="023.56"/>
                    </ListItem>
                </List>

                <Typography paragraph>
                    Pour le second exemple les zero sont conservé, si vous faite <b>FLOAT</b> sans préciser après
                    la virgule le nombre de caractère, les zero seront ignorée.        
                </Typography>

                <Typography paragraph>
                    Pour le troisième exemple le premier zero seras ignorée, ce principe est identique même avec le type 
                    <b> INT</b>, c'est pour cela que si vous entrer un numero commençant par zero, comme
                    07... ce zero disparaitra de la valeur, la raison est que les zero seul sont conssidèrais comme une valeur
                    négative.       
                </Typography>

                <Typography paragraph>
                    <b>SELECT</b> NAME, DESCRIPTION signifie que l'ont veut selectionner les colonnes NAME et 
                    DESCRIPTION, <b>FROM</b> indique sur qu'elle table prendre ces colonnes.
                </Typography>
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>    
            <Typography variant="h4" id="tiers2">Ajoutée des données</Typography>
            <Typography paragraph>
                Cette partie là traite les insertions de données.
            </Typography>
            <AddData/>
            <Card className={classes.card}>
                <Typography paragraph>
                    <b>INSERT INTO</b> est une instruction qui permet d'insérer des données, pour se 
                    faire vous devez préciser la table suivit des colonnes que vous souhaitez placer des données, entre (parenthèse).
                    Pour ajoutée des données vous devez ajoutée l'instruction <b>VALUES</b> suivit des données
                    à entrez entre (parenthèse). L'emplacement des données doit respectée l'ordre des colones, revanche vous pouvez très bien
                    placer DESCRIPTION en premier au lieu de NAME, l'ordre des colonnes dans l'instruction <b>INSERT INTO </b>
                    n'est pas important tant que vous respectée le schéma relationnelle des données entre sa valeur et sa colonne.
                </Typography>
                <Typography paragraph>
                    Vous pouvez ajoutée une rangée de données comme plusieurs a la suite tant que vous les séparées d'une virgule.
                </Typography>
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers3">Changé des données</Typography>
            <Typography paragraph>
                Cette partie là traite le changement d'une donnée dans une colonne spécifique.
            </Typography>
            <UpdateData/>
            <Card className={classes.card}>
                <Typography paragraph>
                    <b>Update</b> permet de changer une donnée d'une colonne, cette instruction est suivit du
                    nom de la table. L'instruction <b>SET</b> est suivit du nom de la colonne que vous souhaitez 
                    affectée les changements, vous pouvez modifier plusieurs colonne en les séparant d'une virgule.
                </Typography>
                <Typography paragraph>
                    <b>Update</b> à besoin d'une clause pour savoir quand affectée ces changements, ici les
                    changement s'opère lorsque l'id correspond à 2.
                </Typography>
            </Card> 
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers4">Supprimer un tupple ou vidée une table</Typography>
            <Typography paragraph>
                Cette partie là met en lumière la suppression des bases de donnée et la purge de donnée.
            </Typography>
            <DeleteData/>
            <Card className={classes.card}>
                <Typography paragraph>
                    <b>DELETE</b> permet de supprimer un tupple (ensemble de colonne d'une ligne) si vous placer une clause.
                    Si <b>DELETE</b> n'as pas de clause, ceci détruiras toute la table selectionée.
                </Typography>
                <Typography paragraph>
                    Il vous est possible d'ajoutée dans la clause des opérateurs logique afin de ciblée mieux ce que vous voulais supprimer, par 
                    ailleurs les clauses et les opérateurs logique peuvent s'effectuée sur la plus part des instructions SQL. Sauf une en particulier.
                </Typography>
                <Typography paragraph>
                    <b>TRUNCATE</b> suivit du nom de la table, permet de videz cette dernières de ces données sans affectée la
                    nature de ces colonnes, cela conserve donc par exemple le champs NAME, DESCRIPTION PRICE et ID_PRODUCT,
                    les typages associer et autre configuration relative aux colonnes. Aucune clause n'est possible avec <b>TRUNCATE</b>.
                </Typography>
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers5">Modifiez une table ou ces colonnes</Typography>
            <Typography paragraph>
                Cette partie là indique comment modifier votre table, ces colones.
            </Typography>
            <AlterTable/>
            <Card className={classes.card}>
                <Typography paragraph>
                    <b>ALTER TABLE</b> est l'instruction pour modifier votre table.
                </Typography>
                <Typography paragraph>
                    <b>ADD</b> permet d'ajoutée une colonne, quand vous ajoutée une colonne vous devez
                    obligatoirement préciser son typage. DATETIME est un typage qui ne demande pas limite de caractère entre parenthèses
                    comme INT ou VARCHAR.
                </Typography>
                <Typography paragraph>
                    L'instruction <b>CHANGE</b> permet de changer le nom de votre colonne, vous devez préciser 
                    de nouveau le typage, même si celui ci n'as pas changé.    
                </Typography>    
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers6">Regroupé les données</Typography>
            <Typography paragraph>
                Cette partie là indique comment regroupé des données avec order by.
            </Typography>
            <OrderByData/>
            <Card className={classes.card}>
                <Typography paragraph>
                    <b>ORDER BY</b> permet d'indiquer que l'ont veux regroupée les données, ici ont regroupe les
                    données par prix grace à la colonne PRICE. Le préfix <b>desc</b> pour descending indique l'ordre 
                    d'affichage, décroissant pour desc, ascendant pour asc. Par defaut <b>ORDER BY</b> est en asc.
                </Typography>  
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers7">Ajoutée une clée étrangère</Typography>
            <Typography paragraph>
                Ou FOREIGN KEY, ce sont les clée appliquant une contrainte particulière aux champs.
            </Typography>
            <ForeignKey1/>
            <Card className={classes.card}>
                <Typography paragraph>
                    Les clée étrangères permette d'appliquée une relation entre deux colonnes de deux tables différentes, voir d'une seule et même table.
                    Supposont que j'ai une table posts qui gère des articles et une autre table qui gère elle les commentaires liée à cette
                    table posts. Si un article disparait du à un drop par exemple, ont souhaiterais également que ces commentaires associer à cette 
                    article soit aussi supprimer. Les clée étrangère permette de faire ceci en se basant sur l'id de la table posts, si ce dernier 
                    disparait alors la clée étrangère agit et supprime aussi le champs associer a cette id dans la table comments. 
                </Typography>
                <CardMedia image={process.env.PUBLIC_URL+ '/media/images/mcd.png'} component="img"/>
                <Typography paragraph>
                    Ci dessus un Schema relationnelle de nos tables. <b>posts</b> est la table contenant nos articles, <b>comments</b>
                     la table contenant les commentaires de nos <b>posts</b>. Dans <b>comments</b> un champ <span className="sec">comment_post </span>
                    est en relation avec <span className="sec">post_id</span> apartenant à la table <b>posts</b>, sur les Schema relationnelle ces clés de 
                     contrainte sont représentée par deux choses, la couleurs de la colonne en question est en rouge, et la fléche indique une relation 
                     entre des colonnes. Cette fléche indique une cardinalitée de 1, n soit 1 utilisateurs pour un nombre indéterminée de commentaires possibles.
                    Les cardinalitée sont propres à Merise, Mérise est une méthodlogie vous permettant d'élaborée une base de données relationnelle fiable.
                </Typography>
                <Typography paragraph>
                    <span className="sec">media_post</span> à pour reférence la colonne <span className="sec">post_id</span> également,&nbsp;
                    <span className="sec">post_user</span> à pour référence la colonne <span className="sec">user_id</span> de la table <b>users</b>.
                </Typography>

                <Typography paragraph>
                    Par conclusion si un post est supprimer, alors ces commentaires et images associer le seront aussi. Si un user est supprimer ces posts le seront également
                    avec se qui suit (commentaires et images).
                </Typography>

                <Typography paragraph>
                    <ErrorIcon fontSize="small" htmlColor="#f50057"/>&nbsp;Attention pour que les clée de contrainte soit comprise par <b>mySQL</b> il faut que vos tables soit 
                    sous le moteur <b>INNODB</b> sans quoi les clés de contrainte seront ignorée sans déclanchée d'erreurs particulière.
                </Typography>
                <Innodb/>
                <Typography paragraph>
                    Cette commande vous permet de passer sous InnoDB sur la table <b>posts</b>. Il existe d'autre moteur de table sous mySQL.
                    myIsam permet d'effectuée des recherches fulltext par exemple, tandis que la plage archive d'une table ne permet que sa lecture de 
                    cette dernière.
                </Typography>
            </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" id="tiers8">Joindre deux tables</Typography>
            <Typography paragraph>
                Par moment ils vous faudras selectionnée, mettre à jours ou supprimer des données sur deux tables en une action.
            </Typography>
            <InnerJoin/>
            <Card className={classes.card}>
                <Typography paragraph>
                    Dans cette exemple je selectionne les champs qui m'interesse sur les deux tables respectifs. Pour ce faire 
                    j'utilise <b>INNER JOIN</b> suivit de la table supplémentaire que je souhaite utilisée.
                </Typography> 
                <Typography paragraph>
                    Il vous est possible d'utilisée <span className="sec">post_user</span> à la place de <span className="sec">post_id</span>.
                </Typography>  
            </Card>
            <Typography paragraph>Autre façon de faire sur trois tables liée entre elle</Typography>
            <InnerJoin2/>
            <Card className={classes.card}>
                <Typography paragraph>
                    Ici je met en relation la table <b>users</b>, <b>posts</b> et <b>comments</b> pour avoir l'auteur, son article et les 
                    commentaires qui sont associer à son article.
                </Typography> 
            </Card>
        </Paper>
      </Layout>
    )
  }
  
  export default PartSql;