import React from 'react'
import './usuario.css'

export default function Usuario({nomeUsuario, linkFotoUsuario}) {
    return(
        <div className={'usuario'}>
            <img className={'fotoUsuario'} src={linkFotoUsuario}/>
            <p className={'nomeUsuario'}> {nomeUsuario} </p>
        </div>
    )
}