import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
import React, {useState} from 'react'
import ChatScreen from './components/ChatScreen'
import LoginScreen from './components/LoginScreen'


// This is a public key
const client = createClient('https://oegyhpowltbywwfgnccm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI2NDIwNSwiZXhwIjoxOTQyODQwMjA1fQ.7P8dUGBYRF75FFBVuMSKrr2cKtLdS2FjCtO6dy2cRhU')

function App() {

  const [userName, setUserName] = useState(null)

  return (

    <Provider value={client}>
    { userName ? (<ChatScreen userName={userName} onLogOut={() => setUserName(null)} />) : (<LoginScreen onLogIn={setUserName} />) }
    </Provider>
  )
}

export default App;
