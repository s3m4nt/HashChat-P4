import React, { useState }  from 'react'

function LoginScreen(props) {

    const [inputTxt, setInputTxt] = useState('')

    return (
        <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            if (inputTxt === '') {
                alert('Username cant be empty')
                return
            }
            props.onLogIn(inputTxt)
            console.log(inputTxt)
        }}>
           <input type="text" value={inputTxt} placeholder="Your user name here" onChange={(e) => {
               setInputTxt(e.target.value)
           }} />
           <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default LoginScreen
