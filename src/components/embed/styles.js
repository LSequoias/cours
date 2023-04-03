import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    embed : {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
        transition: 'all .33s',
        boxShadow: '2px 2px 4px #111',
    
        '&:hover' : {
          transform: 'scale(1.1)',
        },
      },

}));