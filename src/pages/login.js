import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useLazyQuery } from '@apollo/react-hooks'
import { GET_USER } from '../queries/users'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [ getUser, { data, error } ] = useLazyQuery(GET_USER, {
        variables: {
            email: email
        }
    });

    if (error) return <h1 className='error'>Something went wrong</h1>
    if (data?.user && data?.user.user_password === password) {
        localStorage.setItem('loggedIn', true)
        return <Redirect to="/" />
    } else {
        <p>Password incorrect</p>
    }

    return (
        <div className='login'>
            <div className='inputs'>
                <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={() => getUser()}>Login</button>
                <div className="links">
                    <a href="#">Forgot password?</a>
                    <a href="#">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Login
