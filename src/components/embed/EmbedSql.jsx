import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useStyles from "./styles";


export const CreateDatabase = () => {
    const classes = useStyles();
      const codeString = `
CREATE DATABASE shop;

CREATE TABLE product (
    ID_PRODUCT INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(32) NOT NULL,
    DESCRIPTION VARCHAR(999),
    PRICE FLOAT(5,2) NOT NULL
);

SELECT NAME, DESCRIPTION FROM product;

      `;
      return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
      )
  }

export const AddData = () => {
    const classes = useStyles();
    const codeString = `
INSERT INTO product (NAME, DESCRIPTION, PRICE)

VALUES
('green of London', 'thé vert de Chine bermagotte', 9.90),
('sencha ariake', 'thé vert japonais doux', 15.50);


INSERT INTO product (NAME, DESCRIPTION, PRICE)
VALUES ('long Jing', 'thé chaitaigne grillé', 15.00)

INSERT INTO product (NAME, DESCRIPTION, PRICE)
VALUES ('mauvaise saisie', 'undefined', 9.99);

    `;
      return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
      )
}

export const UpdateData = () => {
    const classes = useStyles();
    const codeString = `
Update product
SET NAME = 'sencha ariake',
    DESCRIPTION = 'thé vert japonais doux',
    PRICE = 9.90
WHERE ID_PRODUCT = 2;
    `;
    return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
    )
}


export const DeleteData = () => {
    const classes = useStyles();
    const codeString = `
DELETE FROM product
WHERE ID_PRODUCT = 3;
    
DELETE FROM product
WHERE NAME = 'mauvaise saisie' OR DESCRIPTION = 'undefined';
    
TRUNCATE TABLE product
    `;
    return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
    )
}


export const AlterTable = () => {
    const classes = useStyles();
    const codeString = `
ALTER TABLE product
ADD created_at CURRENT_TIMESTAMP,
    
ALTER TABLE product
ADD categorie VARCHAR(32);
    
ALTER TABLE product
CHANGE categorie CATEGORY VARCHAR(32)
`;
    return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
    )
}

export const OrderByData = () => {
    const classes = useStyles();
    const codeString = `
SELECT NAME FROM product
ORDER BY PRICE desc
`;
    return (
        <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
          {codeString}
        </SyntaxHighlighter>
    )
}



/*A faire  */

export const ForeignKey1 = () => {
  const classes = useStyles();
  const codeString = `
  ALTER TABLE comments
  ADD CONSTRAINT
  FOREIGN KEY (comment_post)
  REFERENCES posts(post_id)
  ON DELETE CASCADE
  ON UPDATE CASCADE

`;
  return (
      <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
  )
}

export const InnerJoin = () => {
  const classes = useStyles();
  const codeString = `
  SELECT user_name, post_name FROM users
  INNER JOIN posts
  WHERE users.user_id = posts.post_id

`;
  return (
      <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
  )
}

export const InnerJoin2 = () => {
  const classes = useStyles();
  const codeString = `
  SELECT user_name, post_name, comment_body FROM users
  INNER JOIN posts
  ON users.user_id = posts.post_id
  INNER JOIN comments
  ON posts.post_id = comments.comment_post

`;
  return (
      <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
        {codeString}
      </SyntaxHighlighter>
  )
}

export const Innodb = () => {
  const classes = useStyles();
  const codeString = `
    ALTER TABLE posts ENGINE = InnoDB;
  `;
  return (
    <SyntaxHighlighter language="sql" style={monokaiSublime} className={classes.embed}>
      {codeString}
    </SyntaxHighlighter>
)
}
