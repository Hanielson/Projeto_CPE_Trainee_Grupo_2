import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index.js'
import Cadastro from './pages/Cadastro/index.js'
import Login from './pages/Login/index.js'
import Livros from './pages/Livros/index.js'
import Perfil from './pages/Perfil/index.js'
import Usuarios from './pages/Usuarios/index.js'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={ Login } />
                <Route path={'/cadastro'} component={ Cadastro } />
                <Route path={'/livros'} component={ Livros } />
                <Route path={'/perfil'} component={ Perfil } />
                <Route path={'/usuarios'} component={ Usuarios } />
                <Route path={'/'} component={ Home } />
            </Switch>
        </BrowserRouter>
    )
}
