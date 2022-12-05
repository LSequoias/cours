
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root : {
    paddingRight: theme.spacing(1),
    color: 'whitesmoke',
  },
  heading : {
    color: '#f50057',
    fontSize: '2rem',
    textShadow: '1px 0 0 #000',
  },
  icon : {
    color: 'gray',
  },
  link : {
    color: '#ee70ee',
    '&:visited' : {
      color: 'gray'
    }
  }


}));
