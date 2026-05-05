import React, { useEffect, useState } from 'react';
import { Header } from '../layouts/Header';
import store from '../app/store';

import { Navigate, Outlet } from 'react-router-dom';

export const AuthRoute = () => {
    const [authenticated, setAuthenticated] = useState(false);
    // double render fix
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        //setting first
        setAuthenticated(localStorage.getItem('jwt') ? true : false);

        store.subscribe(() => {
            setAuthenticated(store.getState('jwt') ? true : false);
        })
        setLoaded(true);
    }, [])

    return loaded ? authenticated ? <><Header /><Outlet /> authenticated</> : <Navigate to="/login" /> : null;
}
