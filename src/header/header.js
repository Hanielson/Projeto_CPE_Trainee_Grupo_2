import React from 'react'
import Logo from '../logo.png'

export default function Header() {
    return (
        <div id="nav">
            <ul className={'navigation1'}>
                <img id={'Logo'} src={Logo} alt={'Bookpedia_Logo'} />
                <li className={'nav1'}><a href={'../pages/Home/index.js'}>Home</a></li>
                <li className={'nav1'}><a href={'../pages/Cadastro/index.js'}>Cadastro</a></li>
                <li className={'nav1'}><a href={'../pages/Login/index.js'}>Login</a></li>
                <li className={'nav1'}><a href={''}>Livros</a></li>
                <li className={'nav1'}><a href={''}>Perfil</a></li>
                <li className={'nav1'}><a href={''}>Usuários</a></li>
            </ul>
        </div>
    )
}