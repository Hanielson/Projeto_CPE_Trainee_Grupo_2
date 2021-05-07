import React, { useState } from 'react'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import InputFormulario from '../../Componentes/input-formulario/InputFormulario'
import './login.css'


/**
 * @todo criar o index
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
        <div>
            <Header />
            <div className={'login'} >
                <div className={'areaDaEsquerda'} >
                    <div className={'areaDosInputs'}>
                        <InputFormulario 
                            textoInput={'E-mail'}
                            className={'inputEmail'}
                            type={'text'}
                            name={'email'}
                            onChange={handleInfoChange}
                        />
                        {/* <TextoFormulario textoInput={'Senha'} /> */}
                        <input
                            className={'inputSenha'}
                            type={'password'}
                            name={'senha'}
                            onChange={handleInfoChange}
                        />
                    </div>
                    <button className={'botaoSubmit'}> Entrar </button>
                </div>
                <div className={'areaDaDireita'}>
                    Logo
                </div>
            </div>
            <Footer />
        </div>
    )
}
