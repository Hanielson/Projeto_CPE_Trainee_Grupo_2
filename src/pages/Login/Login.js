import React, { useState } from 'react'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import {login} from '../../services/auth'
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
                        <a className={'botaoSubmit'} href={'/'} > Entrar </a>
                        <div className={'semLogin'} > 
                            Não tem conta? 
                            <a className={'cadastreSe'} href={'/cadastro'} > Cadastre-se! </a>
                        </div>
                    </div>
                </div>
                <div className={'areaDaDireita'}>
                    <div>
                        <img src="https://i.ibb.co/K5sBWhC/oie-nm4q-Dx-Tc-Xe-FN.png" className={'logo'} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
