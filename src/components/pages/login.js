import { useState } from "react";
import TextField from '@mui/material/TextField';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}
