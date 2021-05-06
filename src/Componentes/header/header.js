import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'

export default function Header() {
    return (
        <div id={'nav'} >
            <ul className={'navigation1'} >
                <img id={'Logo'} src={Logo} alt={'Bookpedia_Logo'} />
                <li className={'nav1'}><a href={'/'}>Home</a></li>
                <li className={'nav1'}><a href={'/cadastro'}>Cadastro</a></li>
                <li className={'nav1'}><a href={'/login'}>Login</a></li>
                <li className={'nav1'}><a href={''}>Livros</a></li>
                <li className={'nav1'}><a href={''}>Perfil</a></li>
                <li className={'nav1'}><a href={''}>Usuários</a></li>
            </ul>
        </div>
    )
}