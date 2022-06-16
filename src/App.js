import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// importing pages
import { Login } from './components/pages/login';
import { Home } from './components/pages/home';
import { AuthRoute } from './components/auth/authRooting';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<AuthRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
