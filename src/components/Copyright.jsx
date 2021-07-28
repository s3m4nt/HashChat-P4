import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography style={{fontSize: '12px', fontStyle: 'italic', color: '#aaa'}} variant="body2" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
          &nbsp;HashChat
        {' '}
      </Typography>
    );
  }

  export default Copyright