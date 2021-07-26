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
           <input type="text" value={inputTxt} placeholder="" onChange={(e) => {
               setInputTxt(e.target.value)
           }} />
           <input type="submit" value="submit/login" />
        </form>
        </div>
    )
}

export default LoginScreen
