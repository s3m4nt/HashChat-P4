import React, { useState } from 'react'
import { useRealtime, useInsert } from 'react-supabase'

function ChatScreen(props) {

    const [inputTxt, setInputTxt] = useState('')
    const [result, reexecute] = useRealtime('messages')
    const [insertResponse, insertMessage] = useInsert('messages')
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
            <div>
            <form onSubmit={async (e) => {
            e.preventDefault()
            if (inputTxt === '') {
                alert('message cant be empty')
                return
            }
            
            // props.onLogIn(inputTxt)
            console.log(inputTxt)
            const {error} = await insertMessage({ username: props.userName, text: inputTxt })
            setInputTxt('') 
            if (error) {
                console.log(error)
            }
        }}>
           <input type="text" value={inputTxt} placeholder="" onChange={(e) => {
               setInputTxt(e.target.value)
           }} />
           <input type="submit" value="submit/login" />
        </form>
            </div>
            <ul>
            {/* // li the message and username */}
                {data.map((message) =>{
                    return <li key={message.id}>{message.username} : {message.text}</li>
                })}
            </ul>
        </div>
    )
}

export default ChatScreen
