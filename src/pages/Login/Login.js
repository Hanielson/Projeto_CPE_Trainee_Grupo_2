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
                        <InputFormulario
                            textoInput={'Senha'}
                            className={'inputSenha'}
                            type={'password'}
                            name={'senha'}
                            onChange={handleInfoChange}
                        />
                    </div>
                    <div className={'areaBotao'}>
                        <button className={'botaoSubmit'}> Entrar </button>
                        <div className={'semLogin'} > 
                            Não tem conta? 
                            <a>Cadastre-se!</a>
                        </div>
                    </div>
                </div>
                <div className={'areaDaDireita'}>
                    <div>
                        <img src="https://i.ibb.co/CJ0TfSK/book-pedia-2.png" className={'logo'} />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
