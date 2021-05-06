import React, { useState } from 'react'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'

/**
 * @todo Tirar os resquicios de HTML puro desse arquivo
 */
export default function Login() {
    const [usuario, setUsuario] = useState([])

    function handleInfoChange(e) {
        const key = e.target.value
        const newUsuario = usuario
        newUsuario[key] = e.target.value
        setUsuario(newUsuario)
    }

    return (
        <div className={'Cadastro'} >
            <Header />
            <article className={'Page'} >
                <br /><br /><br />
                <h2 id={'Login'} >LOGIN</h2>
                <div>
                    <h1>Novo Usuário</h1>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleInfoChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Senha"
                        name="senha"
                        onChange={handleInfoChange}
                    />
                    <br />
                    <button> Entrar </button>
                </div>
            </article>

            <Footer/>
        </div>
    )
}
