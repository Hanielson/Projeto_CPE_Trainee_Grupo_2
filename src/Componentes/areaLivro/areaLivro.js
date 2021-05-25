import React from "react";
import { Link } from "react-router-dom";
import "./areaLivro.css";

export default function AreaLivro({ tituloLivro, autorLivro, linkFotoLivro, opiniaoUsuario, notaLivro }) {
    return (
        <div className={'areaLivro'}>
            <img className={'fotoLivro'} src={linkFotoLivro}/>
            <div className={'dadosLivro'}>
                <p className={'tituloLivro'}> {tituloLivro} <a className={'notaLivro'}> Nota: {notaLivro} </a> </p>
                <p className={'autorLivro'}> {autorLivro} </p>
                <p className={'opiniaoUsuario'}> {opiniaoUsuario} </p>
            </div>
        </div>
    )
}

