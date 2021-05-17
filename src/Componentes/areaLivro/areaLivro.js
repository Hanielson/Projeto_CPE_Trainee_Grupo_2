import React from "react";
import { Link } from "react-router-dom";
import "./areaLivro.css";

export default function AreaLivros() {
    return (
        <div className={'areaLivro'}>
            <img className={'fotoLivro'} src="https://i.ibb.co/d2hsjB2/image-7.png"/>
            <div className={'dadosLivro'}>
                <p className={'tituloLivro'}> O menino do dedo verde <a className={'notaLivro'}>Nota: 6,0 </a> </p>
                <p className={'autorLivro'}> Maurice Druon </p>
                <p className={'opiniaoUsuario'}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <a className={'saibaMais'}>Saiba mais</a>
            </div>
        </div>
    )
}

