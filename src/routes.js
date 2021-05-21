import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { isAuthenticated } from "./services/auth"
import Home from './pages/Home/index.js'
import Cadastro from './pages/Cadastro/index.js'
import Login from './pages/Login/index.js'
import Livros from './pages/Livros/index.js'
import Perfil from './pages/Perfil/index.js'
import Usuarios from './pages/Usuarios/index.js'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={ Login } />
                <Route path={'/cadastro'} component={ Cadastro } />
                <PrivateRoute path={'/livros'} component={ Livros } />
                <PrivateRoute path={'/perfil'} component={ Perfil } />
                <PrivateRoute path={'/usuarios'} component={ Usuarios } />
                <Route path={'/'} component={ Home } />
            </Switch>
        </BrowserRouter>
    )
}
