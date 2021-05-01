import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route route = "/home" component={ Home }/>
                <Route route = "/cadastro" component={ Cadastro }/>
                <Route route = "/login" component={ Login }/>
            </Switch>
        </BrowserRouter>
    );
}