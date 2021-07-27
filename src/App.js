import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import ChatScreen from './components/ChatScreen'
import LoginScreen from './components/LoginScreen'
import './assets/styles/site.css'

// This is a public JWT key
const client = createClient('https://oegyhpowltbywwfgnccm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI2NDIwNSwiZXhwIjoxOTQyODQwMjA1fQ.7P8dUGBYRF75FFBVuMSKrr2cKtLdS2FjCtO6dy2cRhU')

function App(props) {

  const [userName, setUserName] = useState(null)

  return (
    
    <div style={{background: 'white'}}>

    <Provider value={client}>
    { userName ? (<ChatScreen userName={userName} onLogOut={() => setUserName(null)} />) : (<LoginScreen onLogIn={setUserName} />) }
    </Provider>
    

    
    
    </div>





  )
}

export default App;
