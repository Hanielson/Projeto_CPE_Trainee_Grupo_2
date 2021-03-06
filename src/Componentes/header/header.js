import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
import { Dropdown } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";



export default function Header() {
    return (
        <div id={'nav'} >
            <ul className={'navigation1'} >
                <img id={'Logo'} src={Logo} alt={'Bookpedia_Logo'} />
                <ul id={'buttons'}>
                <li className={'nav1'}><a href={'/'}>Home</a></li>
                <li className={'nav1'}><a href={'/cadastro'}>Cadastro</a></li>
                <li className={'nav1'}><a href={'/login'}>Login</a></li>
                <li className={'nav1'}><a href={'/livros'}>Livros</a></li>
                <li className={'nav1'}><a href={'/perfil'}>Perfil</a></li>
                <li className={'nav1'}><a href={'/usuarios'}>Usuarios</a></li>
                </ul>

                <Dropdown className={'dropdown-button'}>
                <Dropdown.Toggle id="dropdown-basic">
                <FaBars/>
                </Dropdown.Toggle>

                <Dropdown.Menu className={'dropdown-menu'}>
                    <Dropdown.Item href={'/'}>
                        Home
                    </Dropdown.Item>
                    <Dropdown.Item href={'/cadastro'}>
                        Cadastro
                    </Dropdown.Item>
                    <Dropdown.Item href={'/login'}>Login</Dropdown.Item>
                    <Dropdown.Item href={'/livros'}>Livros</Dropdown.Item>
                    <Dropdown.Item href={'/perfil'}>Perfil</Dropdown.Item>
                    <Dropdown.Item href={'/usuarios'}>Usuários</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            </ul>
            
            
        </div>
    )
}