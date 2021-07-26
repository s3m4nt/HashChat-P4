import React from 'react'
import { useRealtime } from 'react-supabase'

function ChatScreen(props) {

    const [result, reexecute] = useRealtime('messages')
    const { data, fetching, error } = result
  
    if (fetching || !data) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>
console.log(data)
    return (
        <div>
            <div>
                {props.userName}
                <button onClick={props.onLogOut}>logout</button>
            </div>
            <ul>
                {data.map((message) =>{
                    return <li key={message.id}>{message.username} : {message.text}</li>
                })}
            </ul>
        </div>
    )
}

export default ChatScreen
