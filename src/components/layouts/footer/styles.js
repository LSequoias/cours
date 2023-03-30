
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer : {
    backgroundColor: '#111',
    position: 'static',
    display : 'flex',
    flexDirection: 'column',
    marginTop: '5rem',
    width: '100%',
    boxShadow: 'inset 0px 0px 12px #222',
    borderRadius: '4px',
  },
  blockDocumentation: {
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    width: '100%',
  },
  blockList: {
    padding: '.5rem'
  },
  contentList: {
    display: 'flex',
  },
  list: {
    maxWidth: 'max-content',
    borderRadius: '4px',
    boxShadow: '0px 0px 4px #333',
    display: 'inline',
    margin: '.5rem',
    "&[data-font='PHP']:hover" : {
      backgroundColor: '#4F5B93',
    },
    "&[data-font='Javascript']:hover" : {
      backgroundColor: '#F0DB4F',
      "& a *": {
        color: 'black'
      } 
    },
    "&[data-font='CSS']:hover" : {
      backgroundColor: '#264de4'
    },
    "&[data-font='SQL']:hover, &[data-font='Rust']:hover" : {
      backgroundColor: 'whitesmoke',
      "& a *": {
        color: 'black'
      }
    }

  },
  link: {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration:'none',
    transition: 'color .3s',
  },
  logo: {
    color: 'white',
    fontSize: '2.25rem',
    display: 'contents'

  },
  title : {
    display: 'inline',
    color: 'white',
    fontSize: '1.8rem',
    fontFamily : 'Verdana',
    boxShadow: 'inset 0px 0px 12px #222',
    width: 'max-content',
    margin: 'auto',
    padding: '.5rem 2rem',
    borderRadius: '4px',
  },
  subtitle : {
    color : 'grey',
    fontSize: '1.5rem',
    fontFamily : 'Verdana',
    textAlign: 'center',
    padding: '.5rem 0'

  },
  subheader : {
    textDecoration: 'underline',
    fontSize: '1.5rem',
    color: 'white',
  },
  divider: {
    backgroundColor: '#222',
    width: '75%',
    margin: '1.5rem'
  },
  blockMention: {
    width: '75%',
    padding: '.5rem',
    color: '#d5d5d5'
  },
  paragraph : {
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  
  
}));
