import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    spacing: 1,
    root: {
        margin: `${theme.spacing(1)}rem auto`,
        backgroundColor: 'whitesmoke',
    },
    paper: {
        marginBottom: '1rem',
        padding: `${theme.spacing(0.5)}rem`,
        '& > h4, h5': {
            color: '#f50057',
            padding:`${theme.spacing(0.1)}rem`,
        }, 
        '& h3': {
        textDecoration: 'underline',
        marginBottom : '1rem',
        color: '#555',
        },
        '& p b' : {
            color: '#f50057',
        },
        '& p .sec' : {
            color: "#2e6ade",
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
    picture: {
        boxShadow: 'inset 3px 3px 5px 5px #333',
        backgroundColor: '#111',
    },
    card : {
        borderRadius: '0',
        padding:'1rem',
        margin: '1rem 0'
    },
    title : {
        fontFamily : 'Verdana',
        paddingBottom: '1rem',
    },
    paragraph : {
        textIndent: '1.5rem',
    },
    cardContent: {
        padding: theme.spacing(1),
    },
    btnLink : {
        fontSize: `${theme.spacing(0.15)}rem`,
        color: '#f50057',
    },
    'type' : {
        fontSize: '2rem',
        padding: '0',
        textAlign : 'center',
    },
    table : {
      padding: '.5rem',
  
    },
    tableTitle : {
      fontWeight: 600,
      color: '#f0d2f3'
    },
    thead : {
      borderTop: '1px solid rgba(224, 224, 224, 1)',
      backgroundColor: '#111',
    }
}));