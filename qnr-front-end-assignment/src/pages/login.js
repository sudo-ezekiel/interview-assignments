import React, { useState } from 'react'
import { TextField, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux'
//import { Redirect } from 'react-router-dom'

import { signIn } from '../app/reducers/userSlice'

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch()
    
    const loginFormHandler = (event) => {
        event.preventDefault();
        // Login
        dispatch(signIn())
        navigate("/", { replace: true })
    }

    return (
        <Box sx={{ m: 'auto', width: '50vw', display: 'flex', flexWrap: 'wrap' , gap:4}}
            component="form"
            autoComplete="off"
            onSubmit={(event) => loginFormHandler(event)}>
            <TextField id="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="off" fullWidth required label="Username" variant="standard" />
            <TextField id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" fullWidth type="password" required label="Password" variant="standard" />
            <Button type="submit" sx={{ m: 'auto' }}>Submit</Button>
        </Box>
    )
}
