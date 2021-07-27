import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import photo01 from '../assets/images/Photo03.png'
import logo from '../assets/images/HashChat_01.png'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        HashChat
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function textComp() {
  return (
  <Typography variant="body2" color="textSecondary" align="center">
  {'this is text that\'s wrapped into curlies'}
  <Link color="inherit" href="https://material-ui.com/">
    HashChat
  </Link>{' '}
  {new Date().getFullYear()}
</Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${photo01})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginScreen(props) {
  const classes = useStyles();

  const [inputTxt, setInputTxt] = useState('')

//   return (
//       <div style={{textAlign: 'center'}}>
//       <form onSubmit={(e) => {
//           e.preventDefault()
//           if (inputTxt === '') {
//               alert('Username cant be empty')
//               return
//           }
//           props.onLogIn(inputTxt)
//           console.log(inputTxt)
//       }}>
//          <input type="text" value={inputTxt} placeholder="Your user name here" onChange={(e) => {
//              setInputTxt(e.target.value)
//          }} />
//          <input type="submit" value="Submit" />
//       </form>
//       </div>
//   )

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            <img src={logo} style={{ width: '333px'}} />
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
                InputProps={{value: inputTxt, onChange: (e) => {
                    setInputTxt(e.target.value)
                }}}
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Enter your HashChat Username"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
            onClick={() =>{
                console.log(inputTxt)
                if (inputTxt === '') {
              alert('Username cant be empty')
              return
          }
          props.onLogIn(inputTxt)
            }}
            //   type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{textTransform: 'none'}}
            >
              Enter HashChat
            </Button>
            <Box mt={1}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}