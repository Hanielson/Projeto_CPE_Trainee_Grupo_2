import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'

/**
 * @todo Tirar os resquicios de HTML puro desse arquivo
 */
 export default function Cadastro() {
    const [usuario, setUsuario] = useState([])

    function handleInfoChange(e) {
        const key = e.target.value
        const newUsuario = usuario
        newUsuario[key] = e.target.value
        setUsuario(newUsuario)
    }

    return (
        <div className={'Cadastro'}>
            <Header />
            <article className={'Page'}>
                <br /><br /><br />
                <h2 id={'Cadastro'}>CADASTRO</h2>
                <div>
                    <h1>Novo Usuário</h1>
                    <input
                        type={'text'}
                        placeholder={'Nome'}
                        name={'nome'}
                        onChange={handleInfoChange}
                    />
                    <br />
                    <input
                        type={'text'}
                        placeholder={'Email'}
                        name={'email'}
                        onChange={handleInfoChange}
                    />
                    <br />
                    <input
                        type={'password'}
                        placeholder={'Senha'}
                        name={'senha'}
                        onChange={handleInfoChange}
                    />
                    <br />
                    <input
                        type={'text'}
                        placeholder={'Endereço'}
                        name={'endereço'}
                        onChange={handleInfoChange}
                    />
                    <br />
                    <input
                        type={'text'}
                        placeholder={'Se você fosse um livro, qual seria?'}
                        name={'voceumlivro'}
                        onChange={handleInfoChange}
                    />
                    <br />
                    <br />
                    <button>Entrar</button>
                </div>
            </article>
            <Footer/>
        </div >
    )
}
