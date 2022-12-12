import React from 'react';
import { SyntaxePhp,
  SyntaxePhp2,
  ForeachAndCtl, 
  ForeachWithPhp, 
  PDOWithPhp,
  ExpLayouts,
  FormEmbed,
  FormEmbed2,
  FormEmbed3,
  FormEmbed4,
  FormEmbed5,
  FormEmbed6,
  FormEmbed7,
  FormEmbed8,
  FormEmbed9,
  ChargeurPHP
} from './../components/embed/EmbedPhp';
// Material ui
import {makeStyles, Paper, Typography, Link, Card, CardMedia, List, ListItem} from '@material-ui/core';
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
    '& h3': {
      textDecoration: 'underline',
      marginBottom : '1rem',
      color: '#555',
    },
    title : {
      fontFamily : 'Verdana',
      paddingBottom: '1rem',
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

const {php} = data;

const PartPhp = data => {

    const classes = useStyles();
  
    return (
      <Layout data={php}>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers0">Introduction</Typography>
          <Typography paragraph>
            <span className='query'>PHP</span> est un langage serveur utilisée principalement pour le web, c'est avec ce langage que nous pouvons communiquée avec
            une base de données afin de fournir d'avantage de contenue dit dynamique sur un site. PHP à contrario de javascript doit aux préalables
            être installée sur votre machine pour être executée et compris par votre navigateur en interne, je précise en interne car ce langage n'est pas
            visible par le client comme tel. 
          </Typography>
          <Typography paragraph>
            Ils existes des solutions rapides pour installée PHP comme Wamp pour Windows. Mamp pour Mac ou Lamp pour un système d'explotation
            comme Linux. Mais vous pouvez aussi l'installée manuellement via le site officiel de <Link href="https://www.php.net/downloads.php" rel="noreferrer" target="_blank">php</Link>.
            Préférée une version à 7.1 au minimun pour pouvoir profitée du paradigme orientée objet, les versions antérieurs à 7.1 ne peuvent pas être orientée objet.
          </Typography>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers1">Initialisation à PHP</Typography>
          <Typography paragraph>
              Se familliarisée avec la syntaxe.
          </Typography>
          <SyntaxePhp/>
          <Card className={classes.card}>
            <Typography paragraph>
              <span className='fn'>echo</span> est l'équivalent de console.log() sous javascript. Il n' y as pas grande différences entre le php et le javascript cotée 
              procédurale, vous allez retrouvée les boucles, les fonctions, le typage dynamique de javascript avec quelque subtilitées mais le fonctionnement reste identique.
              Toutefois php peu typée ces variables pour cela il vous suffit d'indiquée son type entre parenthèse après la déclaration de la variable et avant sa valeur.
              Autre, php réclame systématiquement un point virgule à chaque fin de ses instructions.
            </Typography>
            <Typography paragraph>
              Enfin une des puissances de <span className='query'>PHP</span> est qu'il peu déclarée des instructions aux niveaux du DOM pour rendre du contenue dynamique.
            </Typography>
          </Card>
          <SyntaxePhp2/>
          <Card className={classes.card}>
            <Typography paragraph>
              Ci dessus, on déclare notre php avant l'html. Puis on l'utilise dans une balise html de cette façon avec une nouvelle syntaxe <span className='query'>&lt;?=</span> <span className="var">$mavariable</span><span className='query'>?&gt;</span>.
            </Typography>
            <Typography>
              <span className='query'>&lt;?=</span>&nbsp;<span className='query'>?&gt;</span> execute directement une instruction contrairement à <span className='query'>&lt;?php</span> // mes instructions..<span className='query'>?&gt;</span>
            </Typography>
          </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers2">Initialisée une liaison avec une base de donnée.</Typography>
          <Typography paragraph>
            En partant du principe que vous avez deja wamp d'installée ou heidisql sur votre machine..
          </Typography>
          <PDOWithPhp/>
          <Card className={classes.card}>
            <Typography paragraph>
            
            </Typography>

          </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers3">Usage dynamique de PHP</Typography>
          <Typography paragraph>
            La boucle foreach vas permettre d'afficher tous les articles.
          </Typography>

          <Card className={classes.card}>
            <Typography paragraph>
              Cette fonction est separée dans un dossier à part que j'ai nommée controller. Au moment où nous appeleront cette fonction elle
              auras besoin de la connection vers la base de donnée. Pour cela il nous faut un <span className='query'>require</span> avec pour chemin le chemin depuis
              la racine vers le dossier controller, en supposant que la page montrant les articles soit au niveau de la racine de notre projet.
            </Typography>
            <List>
              <ListItem>• affichage_articles.php</ListItem>
              <ListItem>• database/dsn.php</ListItem>
              <ListItem>• controller/post.php</ListItem>
            </List>
          </Card>
          <ForeachAndCtl/>
          <Card className={classes.card}>
            <Typography paragraph>
              Une fois votre connection Initialisée avec <span className="var">$dataSourceName</span> ou <span className="var">$dsn</span> le choix du nom dépend de vous.
              Il nous faut préparée la requète SQL avec l'aide du fonction propre à php, puis l'executée comme illustrée.
            </Typography>
            <Typography paragraph>
              <span className='fn'>fetchAll</span>(<span className="attr">PDO::FETCH_OBJ</span>) permet de récupérée l'ensemble des lignes trouvée et de les 
              transformée en données compréhensible pour php.
            </Typography>
            <Typography paragraph>
              À la différence d'un <span className='fn'>fetch</span> classique, <span className='fn'>fetchAll</span> à besoin d'être fermée avec <span className="var">$query-&gt;closeCursor()</span>.
            </Typography>
            <Typography paragraph>
              Fermée une requète avec <span className="var">$query-&gt;closeCursor()</span> permet de libérée la connexion de la base de donnée et permet à 
              cette dernière de ré effectué une nouvelle requète aux besoins, si vous avez besoin d'effectuée plusieurs requètes sur la même page cette fonction est 
              nécessaire. 
            </Typography>
          </Card>
          <ForeachWithPhp/>

          <Card className={classes.card}>
            <Typography paragraph>
              En premier temps nous devont initialisée la fonction. Ensuite on place la boucle directement dans le dom html de cette façon, observez
              la fin de la syntaxe à la fin on place deux points et non un point virgule, ici on ne veut pas terminer notre instruction, on ferme 
              Toutefois la balise php car on veux as présent écrire du contenu html derière. 
            </Typography>
          </Card>
          <Card className={classes.card}>
            <Typography paragraph>
              <span className="var">$post-&gt;post_name</span> permet d'afficher le nom de l'article, <span className="var">$post</span> est 
              l'alias de <span className="var">posts</span> déclarée dans la condition de la boucle <span className='fn'>foreach</span>. <span className="var">post_name</span> est 
              la colonne sql propre à votre base de donnée, celle ci est interprétée par php ce qui nous permet d'avoir son contenu bien que ce soit une colonne sql, 
              cette magie est possible grace à votre déclaration dans le query <span className='fn'>fetchAll</span>(<span className="attr">PDO::FETCH_OBJ</span>) plutôt, c'est le paramètre en question
              qui permet à php d'interprétée les colonnes sql et les traduire de la sorte. Enfin on ferme la boucle foreach de cette façon avec <span className='fn'>endforeach</span>.
            </Typography>
          </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers4">Utilisée un Layouts</Typography>
          <Typography paragraph>
            Les Layouts permette de ré utilisée une partie de votre code sans pour autant le re écrire.
          </Typography>
          <ExpLayouts/>
          <Card className={classes.card}>
            <Typography paragraph>
              Dans un dossier à part que vous nommer "layouts" stocker vos footer, header, head ou meta, vos navigations etc enfin tout 
              les morceaux html que vous risquez de réécrire plusieurs fois à chaque nouvelle page de contenue.
            </Typography>
          </Card>
          <Card className={classes.card}>
            <Typography paragraph>
              Il se peut toutefois que vous ayez l'envie de changer certaine chose de vos layouts en fonction de certaine pages utilisée.
              vous pouvez faire comme dans l'exemple, initialisée dans chacune de vos pages des variables suceptibles d'être modifiez.
            </Typography>
          </Card>
        </Paper>

        <Paper elevation={1} className={classes.paper}>
          <Typography variant="h4" id="tiers5">Faire un formulaire avec php (procédurale)</Typography>
          <Typography paragraph>
            Dans notre formulaire nous allons avoir besoin de plusieurs conditions pour tester les différents champs. Il nous faut aussi
            faire des indications d'erreur au cas où l'utilisateur se trompe.
          </Typography>
          <FormEmbed/>
          <h3 className={classes.h3}>
            Etape I : définir l'appel de notre controller sur notre page de formulaire
          </h3>
          <FormEmbed2/>
          <Typography paragraph>
            <span className='query'>require_once</span> permet d'appelée la page que nous avons besoins, tout comme la connection avec PDO plus haut il faut l'instancier dans notre 
            formulaire, pour ça ils vous suffit de placer le chemin relatif directement en tant qu'attribut d' <span className="attr">action </span>
            . Ont soliciteras aussi <span className="attr">POST</span> comme valeurs d'attribut de <span className="attr">method</span>.
          </Typography>

          <Typography paragraph>
            Pourquoi <span className="attr">POST</span> plutôt que <span className="attr">GET</span> ? <span className="attr">POST</span> à l'avantage 
            de ne pas passer par l'url lorsqu'il fait transitez des informations vers le serveur, si les informations telle que les mot de passe figure dans l'url 
            fuyez le site, c'est une faille de sécuritée, <span className="attr">GET</span> fait transitez les informations via l'url.
          </Typography>
          <h3 className={classes.h3}>
            Etape II : Faire les différents champs de saisie
          </h3>
          <FormEmbed3/>
          <Typography paragraph>
            Prenont ce champs <span className="query">nom</span> pour exemple. L'attribut <span className='attr'>name</span> doit contenir
            une valeur arbitraire, cette valeur c'est vous qui la choisissez en format string, l'idéale est de la nommée de sorte à ce qu'elle
            soit en référence avec votre champs de saisie. Cette attribut serviras à notre futur controller de moyen de reception. 
          </Typography>
          <Typography paragraph>
            L'attribut <span className="attr">id</span> doit être identique avec la valeur de <span className="attr">for</span> du label pour une 
            question accessibilitée web et de norme W3C, il ne seras pas en lien avec notre controller cependant.
          </Typography>
          <Typography paragraph>
            L'attribut <span className="attr">placeholder</span> contient une valeur de saisie par defaut dans le champs, cette valeur de saisie 
            sert d'indication à l'utilisateur. Je met comme valeur dans cette attribut une conditions en ternaire, le ternaire permet d'écrire une condition 
            sur une ligne comme ceci : Si <span className="var">$errorName</span> est vrais (donc remplit) alors je retourne le contenue de <span className="var">$errorName </span>
            sinon je retourne l'indication par defaut. <span className="var">$errorName</span> contiendras dans le controller nos différentes indications
            à l'utilisateur en cas d'erreur de saisie, enfantin ? 
          </Typography>

          <Typography paragraph>
            L'attribut <span className="attr">autofocus</span> force la tabulation de l'utilisateur à ce placer diretement dans ce champs lorsque
            celui ci apparait sur cette page.
          </Typography>
          <Typography paragraph>
            Voici le rendue des indications grace aux ternaires dans les placeholders (avec le controller de fait biensûr).
          </Typography>
          <CardMedia image={process.env.PUBLIC_URL+ '/media/images/formValidation.png'} component="img"/>
          <h3 className={classes.h3}>
            Etape III : Crée la logique du formulaire (ou le controller).
          </h3>
          <FormEmbed4/>
          <Typography paragraph>
            Et là en principe je vous est tous perdue.. Découpont le code pour mieux comprendre.
          </Typography>
          <FormEmbed5/>
          <Typography paragraph>
            Ont déclares toutes les variables dont nous allons avoir besoin et surtout ont les définits à une chaine vide, c'est important.
          </Typography>
          <FormEmbed6/>
          <Typography paragraph>
            <span className="query">$_SERVER</span> est une superGlobal, c'est un tableau contenant différente entête de données. Ses paramètres
            sont prédéfinit et vous ne pouvais pas en inventée, vous pouvez retrouver tout les paramètres de cette superGlobal sur le site officiel
            de <Link href="https://www.php.net/reserved.variables.server" rel="noreferrer" target="_blank">php</Link>. Pour notre cas on utilise le 
            paramètre <span className="attr">'REQUEST_METHOD'</span> qui vas se charger de récupérée toutes les éventuelles requètes <span className="query">http </span> 
            émise par la page du formulaire, comme le <span className="query">GET</span>, le <span className="query">POST</span>, le <span className="query">PUT</span> ou le <span className="query">HEAD</span>.
            Pour notre cas, ont demandes si $_SERVER contient une requète de type <span className="query">POST</span> (se qui est le cas) alors ensuite 
            ont détermines nos instructions.
          </Typography>
          <Typography paragraph>
            L'avantage de cette méthode est qu'elle permet un discernement entre les différentes méthodes employer sur la page, si vous avez 
            besoin de faire un formulaire d'inscription vous employerais donc au une égalitée pour <span className="query">POST</span>, si vous
            faite aussi un formulaire de modification vous devrais faire aussi <span className="query">$_SERVER[<span className="attr">'REQUEST_METHOD'</span>]</span> avec 
            une égalité sur <span className="query">PUT</span>.
          </Typography>
          <FormEmbed7/>
          <Typography paragraph>
            Ici on place chacunes des variables qui vont accueillir chacun des champs du formulaire séparéments. <span className="fn">trim()&nbsp;</span>
            est une fonction qui vide la chaine de caractères de ces espaces au début et en fin de <span className="span fn">htmlspecialchars()</span>
            &nbsp; est une fonction qui permet de replacer certain caractères spéciaux en <Link href="https://developer.mozilla.org/fr/docs/Glossary/Entity" rel="noreferrer" target="_blank">entitée HTML</Link> car 
            certain caractères spéciaux peuvent être dangereux pour la base de donnée ou le site web en lui même, généralement lorsque l'ont check les champs 
            de saisie ont s'arranges pour ne pas faire passer les données (qui sont la saisie de l'utilisateur) avec des doubles tirets ou des chevrons.
          </Typography>
          <Typography paragraph>
            <span className="query">$_POST[</span><span className="attr">'name'</span>] vas récupérée la valeur saisie dans le champs de formulaire avec comme attribut html <span className="attr">name</span>.
          </Typography>
          <Typography paragraph>
            <span className="fn">date('Y-m-d H:i:s')</span> génére une date au format demandée. Donc années, mois, jour, heures, minutes et secondes.
          </Typography>
          <FormEmbed8/>
          <Typography paragraph>
            Dans un controller il nous faut en général vérifier les données envoyez par le client afin de bloquée éventuellement les données 
            indésirable pour notre site. Ils existent diversses façon de protéger notre site / application pour ma part ici je me sert d'expression
            régulière pour filtrée les données afin de validée ou non. Je fais ce traitement sur chaque champs de formulaire récupérée.
          </Typography>
          <FormEmbed9/>
          <Typography paragraph>
            En principe cette partie la doit ce retrouver dans un model mais là nous restons sur de la programmation orientée procédural.
            Cette partie consiste à envoyez les données des <span className="query">$_POST</span> vers la base de donnée.
          </Typography>
          <Typography paragraph>
            La première ligne dit si les variables d'erreur sont vides de leurs exceptions (message d'erreur utilisateur) alors ont 
            prépare la requète SQL. 
          </Typography>
          <Typography paragraph>
            Pour communiquée avec la base de donnée il nous faut établir une connexion avec celle ci. Une fois fait on déclare une variable 
            <span className="var">&nbsp;$statement</span> que l'ont conssidéreras comme une variable d'étape. Cette variable d'étape aura comme valeur
            la variable <span className="var">$domainSourceName</span> ou <span className="var">$dsn</span> aux choix. <span className="var">$dsn</span> seras 
            en liaison avec une méthode propre à php qui est <span className="fn">prepare()</span> et le paramètre de cette fonction <span className="fn">prepare()</span>
            &nbsp;seras notre requète sql déclarée plus haut.
          </Typography>

          <Typography paragraph>
            Chacune des étapes déclarée avec la variable <span className="var">$statement</span> sera en liaison avec la méthode <span className="fn">bindValue()</span>
            &nbsp;encore une fois, méthode propre à php. Cette méthode prend en paramètre 3 en arguments, le champ sql ciblée, la variable avec la donnée à passer
            et un paramètre propre à cette fonction pour déterminer le type de la données et ce paramètre doit être identique au type de la donnée cotée base de donnée.
            Exemple si <span className="query">post_name</span> à pour type varchar ou text il devras retournée alors dans ce paramètre l'argument <span className="attr">PDO::PARAM_STR</span>.
          </Typography>
          <Typography paragraph>
            Une fois toutes les étapes faites, alors ont utilise <span className="var">$statement</span> avec la méthode <span className="fn">execute()</span>.
          </Typography>
          <Typography paragraph>
            Selon le résultat établie ont effectue une redirection souhaitez, <span className="fn">unset()</span> permet de détruire la variable en question.
          </Typography>
        </Paper>
      </Layout>
    )
  }
  
  export default PartPhp;