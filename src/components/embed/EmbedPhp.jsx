import React from 'react';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useStyles from "./styles";


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

export const SyntaxePhp2 = () => {
    const classes = useStyles();
      const codeString = `
// index.php
<?php
    $mavariable = (string) "une prase d'acroche pour ce Blog :";
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <!--vos meta, link cie..-->
    <title>PortFolio | Jean Pierre | Accueil</title>
</head>

<body>
    <p><?= $mavariable ;?></p>
</body>
  `;
      return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
      )
  }

export const PDOWithPhp = () => {
    const classes = useStyles();
      const codeString = `
// database/dns.php
<?php 
    function connexion() {
        $domainSourceName = 'mysql:host=localhost;dbname=blog';
        $user_admin = 'root';
        $mdp = '1234';
          
        try {
              
            $dataSourceName = new PDO($domainSourceName, $user_admin, $mdp);
            $dataSourceName->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dataSourceName;
          
        }
      
        catch(PDOException $e) {
          
            echo $e->getMessage();
            die();
          
        }
    }
`;
    return (
        <SyntaxHighlighter language="php" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}


export const ForeachAndCtl = () => {
    const classes = useStyles();
      const codeString = `
<?php
    // controller/post.php

    function getPosts() {
        require('database/dsn.php');
        $dataSourceName = connexion();
        $query = $dataSourceName->prepare('SELECT post_id, post_name, post_image FROM posts ORDER BY post_id DESC');          
        $query->execute();
          
        $getData = $query->fetchAll(PDO::FETCH_OBJ);
        return $getData;
          
        $query->closeCusor();
    }
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}


export const ForeachWithPhp = () => {
    const classes = useStyles();
      const codeString = `
<?php 
    require_once('controller/post.php');
      
    $posts = getPosts();
      
;?>
      
<!DOCTYPE html>
<html>
    <body>
        <header class="header">  
            <a class="subtitle" href="inscription.php">S'inscrire</a></li>
            <a class="subtitle" href="connexion.php">Se connecter</a></li>
            <a href="index.php" class="subtitle">Accueil</a>   
        </header>      
        <section class="main">
            <?php foreach($posts as $post): ?>
                <article class="card">
                    <h1 class="card_title"><?= $post->post_name ;?></h1>
                    <figure class="card_media">
                        <img class="media" src="<?= $post->post_image;?>"/>
                    </figure>
                    <a class="btn btn_success" href="detail.php?id=<?php echo $post->post_id?>">Voir plus..</a>
                </article>
            <?php endforeach;?>
        </section>   
    </body>
</html>
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const ExpLayouts = () => {
    const classes = useStyles();
      const codeString = `
// layouts/meta.php
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href=" <?=$meta_urlCSS?> " type="text/css" />
    <title><?=$meta_title?></title>
</head>

// index.php
<?php
    $meta_urlCSS = 'assets/css/style.css';
    $meta_title = 'Accueil';
;?>

<!DOCTYPE html>
<html>
    <body>
        <header class="header">  
            <head>
                <?php include_once('layouts/meta.php') ?>
            </head>
        </header>      
        <?php include_once('layouts/navigation.php');?>
        
        <section>
            <!--votre contenue-->
        </section>

        <?php include_once('layouts/footer.php');?> 
    </body>
</html>
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed = () => {
    const classes = useStyles();
      const codeString = `
<!doctype html>
<html lang="fr">
    <head>
    </head>
    <body class="root"> 
        <main class="main">
            <?php require_once('controller/ctr.php');?>
            <form method="POST" action="<?php 'controller/ctr.php' ?>" class="form" aria-label="information de contacte">
                <fieldset class="form_border fieldset">
                    <legend class="form_border title">S'inscrire</legend>
      
                    <label for="name">
                        <input class="inputForm"
                            name="name"
                            required 
                            type="text" 
                            placeholder="<?php echo $errorName ? $errorName : 'Entrez votre Pseudo' ;?>" 
                            id="name"
                            autofocus
                        />
                    </label>
                      
                    <label for="mail">
                        <input class="inputForm"
                            name="mail"
                            type="email" 
                            placeholder="<?php echo $errorMail ? $errorMail : 'Entrez une adresse mail valide' ;?>" 
                            id="mail"
                        />
                    </label>            
                      
                    <label for="psw">
                        <input class="inputForm"
                            name="psw"
                            required 
                            type="password" 
                            placeholder="<?php echo $errorPassword ? $errorPassword : 'Entrez votre mot de passe' ;?>" 
                            id="pws"
                        />
                    </label>
                      
                    <label for="cfpsw">
                        <input class="inputForm"
                            name="cfpsw"
                            required 
                            type="password"
                            placeholder="<?php echo $errorCPassword ? $errorCPassword : 'Confirmée votre mot de passe' ;?>" 
                            id="cfpsw"
                        />
                    </label>
                <button class="btn btn_success" type="submit">Submit</button>
            </fieldset>
        </form>
    </main>
</body>
</html>   
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed2 = () => {
    const classes = useStyles();
      const codeString = `
    <?php require_once('controller/ctr.php');?>
    <form method="POST" action="<?php 'controller/ctr.php' ?>" class="form" aria-label="information de contacte"></form>
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed3 = () => {
    const classes = useStyles();
      const codeString = `
    <label for="name">
        <input class="inputForm"
            name="name"
            required 
            type="text" 
            placeholder="<?php echo $errorName ? $errorName : 'Entrez votre Pseudo' ;?>" 
            id="name"
            autofocus
        />
    </label>

      `;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed4 = () => {
    const classes = useStyles();
      const codeString = `
<?php 
// controller/ctr.php

$errorName = $errorMail = $errorPassword = $errorCPassword = $name = $mail = $password = $cPassword = '';
      
if($_SERVER['REQUEST_METHOD'] == 'POST') {
          
    $getName = trim(htmlspecialchars($_POST['name']));
    $getMail = trim(htmlspecialchars($_POST['mail']));
    $getPassword = trim(htmlspecialchars($_POST['psw']));
    $getCPassword = trim(htmlspecialchars($_POST['cfpsw']));
    $getDate = date('Y-m-d H:i:s');
    $getRole = 'new';
          
    if(empty($getName)) {      
        $errorName  = 'Veuillez remplir ce champs.';
    } elseif(!filter_var($getName, FILTER_VALIDATE_REGEXP, array('options' => array("regexp" => "/^[a-zA-Z]*$/" )))) {     
        $errorName = 'Format non désiré !';  
    } elseif(strlen($getName) <= 3) {       
        $errorName = 'Le nom doit comportée au moins 4 caractères.';
    } elseif(strlen($getName) > 16 ) {      
        $errorName = 'Le nom ne peu pas dépassez les 16 caractères.'; 
    } else {
        $name = $getName;     
    }
          
          
    if(empty($getMail)) {
        $errorMail  = 'Veuillez remplir ce champs.';
    } elseif(!filter_var($getMail, FILTER_VALIDATE_REGEXP, array('options' => array("regexp" => "/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/" )))) {
        $errorMail = 'Format non désiré !';
    } else {
        $mail = $getMail;
    }
          
          
    if(empty($getPassword)) {
        $errorPassword = "Ce champs doit être remplit.";
    } elseif(!filter_var($getPassword, FILTER_VALIDATE_REGEXP, array(
        'options' => array("regexp" => "/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/" )))) {
        $errorPassword = "Ce champs doit avoir 8 caractères, un symbole spécial, une majuscule, un chiffre.";
    } else {       
        $hash = password_hash($getPassword, PASSWORD_DEFAULT);
        $password = $hash;
    }
          
    if(empty($getCPassword) && !isset($getCPassword)) {      
        $errorCPassword  = "Ce champs doit être remplit et indentique à celui du mot de passe choisie.";     
    } elseif(password_verify($getCPassword, $password)) {      
        $cPassword = $getCPassword;      
    } else {  
        $errorCPassword = "mot de passe différent !";    
    }
              
    if(empty($errorName) && empty($errorMail) && empty($errorPassword) && empty($errorCPassword)) {    
        $query  = 'INSERT INTO bl_users (user_name, user_mail, user_password, created_at_user, user_role) VALUES (:user_name, :user_mail, :user_password, :created_at_user, :user_role)';
              
        $dataSourceName = require_once('database/dsn.php');
        $dataSourceName = connexion();
  
        if($statement = $dataSourceName->prepare($query)) {
            $statement->bindValue(':user_name', $name, PDO::PARAM_STR);
            $statement->bindValue(':user_mail', $mail, PDO::PARAM_STR);
            $statement->bindValue(':user_password', $password, PDO::PARAM_STR);
            $statement->bindValue(':created_at_user', $getDate, PDO::PARAM_STR);
            $statement->bindValue(':user_role', $getRole, PDO::PARAM_STR);
  
            $statement->execute();   

            header("location:index.php");
        } else {
            header("location:inscription.php");
        }
              
        unset($statement);
              
    }
          
    unset($dataSourceName);
}
       
`;
    return (
        <SyntaxHighlighter language="php" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}


export const FormEmbed5 = () => {
    const classes = useStyles();
      const codeString = `
    $errorName = $errorMail = $errorPassword = $errorCPassword = $name = $mail = $password = $cPassword = '';
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed6 = () => {
    const classes = useStyles();
      const codeString = `
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        
    }
    //ou aussi..
    if(isset($_POST)) {

    }
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed7 = () => {
    const classes = useStyles();
      const codeString = `
    $getName = trim(htmlspecialchars($_POST['name']));
    $getMail = trim(htmlspecialchars($_POST['mail']));
    $getPassword = trim(htmlspecialchars($_POST['psw']));
    $getCPassword = trim(htmlspecialchars($_POST['cfpsw']));
    $getDate = date('Y-m-d H:i:s');
    $getRole = 'new';
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed8 = () => {
    const classes = useStyles();
      const codeString = `
    if(empty($getPassword)) {
        $errorPassword = "Ce champs doit être remplit.";
    } elseif(!filter_var($getPassword, FILTER_VALIDATE_REGEXP, array(
        'options' => array("regexp" => "/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/" )))) {
        $errorPassword = "Ce champs doit avoir 8 caractères, un symbole spécial, une majuscule, un chiffre.";
    } else {       
        $hash = password_hash($getPassword, PASSWORD_DEFAULT);
        $password = $hash;
    }
          
    if(empty($getCPassword) && !isset($getCPassword)) {      
        $errorCPassword  = "Ce champs doit être remplit et indentique à celui du mot de passe choisie.";     
    } elseif(password_verify($getCPassword, $password)) {      
        $cPassword = $getCPassword;      
    } else {  
        $errorCPassword = "mot de passe différent !";    
    }
`;
    return (
        <SyntaxHighlighter language="php" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export const FormEmbed9 = () => {
    const classes = useStyles();
      const codeString = `
      if(empty($errorName) && empty($errorMail) && empty($errorPassword) && empty($errorCPassword)) {    
        $query  = 'INSERT INTO bl_users (user_name, user_mail, user_password, created_at_user, user_role) VALUES (:user_name, :user_mail, :user_password, :created_at_user, :user_role)';
              
        $dataSourceName = require_once('database/dsn.php');
        $dataSourceName = connexion();
  
        if($statement = $dataSourceName->prepare($query)) {
            $statement->bindValue(':user_name', $name, PDO::PARAM_STR);
            $statement->bindValue(':user_mail', $mail, PDO::PARAM_STR);
            $statement->bindValue(':user_password', $password, PDO::PARAM_STR);
            $statement->bindValue(':created_at_user', $getDate, PDO::PARAM_STR);
            $statement->bindValue(':user_role', $getRole, PDO::PARAM_STR);
  
            $statement->execute();   

            header("location:index.php");
        } else {
            header("location:inscription.php");
        }
              
        unset($statement);
              
    }
`;
    return (
        <SyntaxHighlighter language="phtml" style={monokaiSublime} className={classes.embed}>
            {codeString}
        </SyntaxHighlighter>
    )
}


export const ChargeurPHP = () => {
    const classes = useStyles();
      const codeString = `
require_once('Class/Product/Product.php');

spl_autoload_register(function($class) {
          
    var_dump(__DIR__);
    $path = dirname(__DIR__) . '/' . str_replace('\\', '/', $class) . '.php';
        if(file_exists($path)) {
            require $path;
        }
    });
`;
      return (
        <SyntaxHighlighter language="php" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
      )
  }
