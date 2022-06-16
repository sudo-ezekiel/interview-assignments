import { useState } from "react";
import { TextField, Box, Button } from '@mui/material';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        console.log("username is:", username, "password is:", password)
    }

    return (
        <Box sx={{ m: 'auto', width: '50vw', display: 'flex', flexWrap: 'wrap' }}
            component="form"
            autoComplete="off"
            onSubmit={handleLogin}>
            <TextField id="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="off" fullWidth required label="Username" variant="standard" />
            <TextField id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" fullWidth type="password" required label="Password" variant="standard" />
            <Button type="submit" sx={{ m: 'auto' }}>Submit</Button>
        </Box>
    )
}
