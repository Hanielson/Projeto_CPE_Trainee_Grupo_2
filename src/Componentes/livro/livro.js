import React from "react";
import { Link } from "react-router-dom";
import "./livro.css";

export default function Livro({ tituloDoLivro, autor, linkCapaLivro, notaMedia }) {
    return (
        <div className={'livro'}>
            <img className={'capaLivro'} src={linkCapaLivro}/>
            <div className={'dadosDoLivro'}>
                <p className={'tituloDoLivro'}> {tituloDoLivro}</p>
                <p className={'autor'}> {autor} </p>
                <p className={'notaMedia'}> Nota Média:</p>
                <p className={'numeroNota'}>{notaMedia}</p>
            </div>
        </div>
    )
}