import React, { useState } from 'react'
import { useRealtime, useInsert } from 'react-supabase'
import { Box, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {FormControl,InputLabel, Input, FormHelperText } from '@material-ui/core'
// import { SendIcon } from '@material-ui/icons/SendIcon';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Header from './Header'
import Copyright from './Copyright'

function ChatScreen(props) {

    const [inputTxt, setInputTxt] = useState('')
    const [result, reexecute] = useRealtime('messages')
    const [insertResponse, insertMessage] = useInsert('messages')
    const { data, fetching, error } = result

    if (fetching || !data) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>
console.log(data)
    return (
        <>
        <Header 
        onLogOut={props.onLogOut}
        bgcolor="background.paper" 

        />
        
        <div style={{textAlign: 'center'}}>
        <Box
          color="#000"
          bgcolor="background.paper"
          fontFamily="h1.fontFamily"
          fontWeight="bold"
          fontSize={{ xs: '1.2rem', sm: '1.2rem', md: '1.8rem' }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
                Hello, <span style={{color:'#ff671d', borderBottom: '#ff671d dotted 1px'}}>{props.userName}!</span> Welcome to HashChat<br/>
                {/* <button onClick={props.onLogOut}>logout</button> */}
            </Box>


            <Box bgcolor="background.paper">
            
    <form onSubmit={async (e) => {
    e.preventDefault()
    if (inputTxt === '') {
        alert('Your HashChat message can\'t be empty!')
        return
    }

    // props.onLogIn(inputTxt)
    // console.log(inputTxt)
    const {error} = await insertMessage({ username: props.userName, text: inputTxt })
    setInputTxt('') 
    if (error) {
        console.log(error)
    }
}}>
    <input type="text" className="chat-message" value={inputTxt} placeholder="" onChange={(e) => {
        setInputTxt(e.target.value)
    }} />
    {/* <input type="submit" value="Send" /> */}
    <Button 
    startIcon={<SendOutlinedIcon />}
    type="submit"
    value="Send"
    variant="contained" 
    color="white"
    style={{background: '#f2844d', color: 'white', textTransform: 'none', marginLeft: '6px'}}
    >
    Send your HashChat 
    </Button>
    
</form>
            </Box>
            <Box className="outer-chat">
            <div className="chats">
            <ul>
            {/* // li the message and username */}
            
                {data.map((message) =>{
                    return <li key={message.id}><span style={{fontWeight: 'bold', color: '#000'}}>{message.username}</span> : {message.text}</li>

                })}
            </ul>
            </div>
        </Box>
        <Box style={{borderTop: '10px'}}>
        {/* <hr style={{color: 'lightgray'}} /> */}
              <Copyright />
            </Box>
</div>
</>

    )
}

export default ChatScreen
