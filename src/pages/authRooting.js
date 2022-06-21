import React, { useEffect, useState } from 'react';
import { Header } from '../layouts/Header';
import store from '../app/store';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Navigate,
    useHistory,
    useLocation
} from "react-router-dom";

export const AuthRoute = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        //setting first
        setAuthenticated(localStorage.getItem('jwt') ? true : false);

        store.subscribe(() => {
            setAuthenticated(store.getState('jwt') ? true : false);
        })
        setLoaded(true);
    }, [])

    return loaded ? authenticated ? <><Header />{children} authenticated</> : <Navigate to="/login" /> : null;
}
