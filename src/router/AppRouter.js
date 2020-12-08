import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
  
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const { auth, verificaToken } = useContext( AuthContext );
    
    useEffect( () => {
        verificaToken()
    }, [verificaToken])
    
    
    if( auth.checking ){
        return <h1>Espere por favor</h1>
    }
    return (
        <Router>
        <div>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                {/* <Route path="/auth" component={ AuthRouter } /> */}
                <PublicRoute isAuthenticated={ auth.logged } path="/auth" component={ AuthRouter } />
                {/* <Route exact path="/" component={ ChatPage } /> */}
                <PrivateRoute isAuthenticated={ auth.logged } exact path="/" component={ ChatPage } />
                <Redirect to='/' />
            </Switch>
        </div>
        </Router>
    )
}
