
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer : {
    backgroundColor: '#111',
    position: 'static',
    display : 'flex',
    flexDirection: 'column',
    marginTop: '5rem',
    width: '98%',
    borderTop: '1px solid f50057',
    padding: '1rem',
  },
  subtitle : {
    display: 'inline',
    color: 'white',
    fontSize: '2.2rem',
    fontFamily : 'Verdana',
    paddingBottom: '1rem',
  },
  subheader : {
    textDecoration: 'underline',
    fontSize: '1.5rem',
    color: 'white',
  },
  card : {
    background : 'transparent',
  },
  paragraph : {
    fontSize: '1.5rem',
    color: 'white',
  }
  
  
}));
