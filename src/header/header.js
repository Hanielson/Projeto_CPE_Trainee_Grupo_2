import React from 'react';
import Logo from './logo.png'
import './header.css'

export default function Header() {
    return (
        <div>
            
            <head>
                <meta charset="utf-8" />
                <link rel="stylesheet" href="header.css" />
                <title>Bookpedia</title>
            </head>
            
                    <div id="nav">
                        <ul class="navigation1">
                            <img id="Logo" src={ Logo } alt="Bookpedia_Logo"/>
                                <li class="nav1"><a href="start.html">Home</a></li>
                                <li class="nav1"><a href="link2.html">Cadastro</a></li>
                                <li class="nav1"><a href="link3.html">Login</a></li>
                                <li class="nav1"><a href="link4.html">Livros</a></li>
                                <li class="nav1"><a href="link5.htm">Perfil</a></li>
                                <li class="nav1"><a href="link6.html">Usuários</a></li>
                        </ul>
                    </div>

        </div>
    );
}