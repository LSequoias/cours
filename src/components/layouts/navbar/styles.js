
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header : {
    backgroundColor: '#111',
    boxShadow: '0 2px 1px 0 #f50057',
    position: 'static'
  },
  menu : {
    backgroundColor: '#111111aa',     // eq : opacity
    '& a' : {
      textDecoration : 'none',
      color: 'gray',
      '&:hover' : {
        color: '#f50057',
      }
    },
    '& .MuiPaper-root' : {
      backgroundColor: '#111',
      border: '2px solid #f50057',
      borderRadius: '12.5px',
    }
  },
  '.MuiAppBar-colorPrimary' : {
    color: 'purple'
  },
  icon : {
    margin: theme.spacing(2),
    color: 'white'
  },
}));
