import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { login } from '../../services/auth'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import InputFormulario from '../../Componentes/input-formulario/InputFormulario'
import api from '../../services/api'
import './login.css'
/**@todo criar o index*/

export default function Login() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('/login', {email , password});
            login(response.data.AcessToken);
            alert("Bem vindo " + response.data.user[0].username);
            history.push('/home');
        }
        catch(error){
            if(error.response.status === 403){
                alert("Credenciais inválidas!");
            }
            else{
                alert(error.response.data.notification);
            }
        }
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputFormulario
                            textoInput={'Senha'}
                            className={'inputSenha'}
                            type={'password'}
                            name={'senha'}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className={'areaBotao'}>
                        <button className={'botaoSubmit'}  type="button" value="text" onClick={handleLogin}> Entrar </button>
                        <div className={'semLogin'} > 
                            Não tem conta? 
                            <a className={'cadastreSe'}  href={'/cadastro'}> Cadastre-se! </a>
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

