import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
import React, {useState} from 'react'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ChatScreen from './components/ChatScreen'
import LoginScreen from './components/LoginScreen'
import Header from './components/Header'


// This is a public key
const client = createClient('https://oegyhpowltbywwfgnccm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI2NDIwNSwiZXhwIjoxOTQyODQwMjA1fQ.7P8dUGBYRF75FFBVuMSKrr2cKtLdS2FjCtO6dy2cRhU')

function App() {

  const [userName, setUserName] = useState(null)

  return (
    <>
<Header />
    <Provider value={client}>
    { userName ? (<ChatScreen userName={userName} onLogOut={() => setUserName(null)} />) : (<LoginScreen onLogIn={setUserName} />) }
    </Provider>
    
    <Typography variant="body2" color="textSecondary" align="center">
  {'this is text that\'s wrapped into curlies at App'}
  {/* <Link color="inherit" href="https://material-ui.com/">
    HashChat
  </Link>{' '} */}
  {/* {new Date().getFullYear()} */}
</Typography>
    
    
    </>





  )
}

export default App;
