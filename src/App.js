import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import ChatScreen from './components/ChatScreen'
import LoginScreen from './components/LoginScreen'
import './assets/styles/site.css'

const client = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

function App(props) {
console.log(process.env.REACT_APP_SUPABASE_URL)

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
