import React from 'react'
import Logo from '../../assets/logo.png'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import Usuario from '../../Componentes/usuario/usuario'
import './usuarios.css'

export default function Usuarios() {
    return (
        <div className={'Usuarios'}>
            <Header />
            <div className={'pagUsuarios'}>
                <div className={'bordaTituloPag'}>
                    <p className={'tituloPag'}> Conheça outros leitores </p>
                </div>
                <div className={'areaUsuarios'}>
                    <div className={'areaDeCima'}>
                        <div className={'usuario1'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/wRH2DmY/woman-1284411-1920-1.png"}
                                nomeUsuario={'Luana Pina'}
                            />
                        </div>
                        <div className={'usuario2'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/8rY9Gnt/perfil-Homem2.jpg"}
                                nomeUsuario={'Nome Sobrenome'}
                            />
                        </div>
                        <div className={'usuario3'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/nbqk75R/oie-hs-HKvzzs-Zv-HT.jpg"}
                                nomeUsuario={'Nome Sobrenome'}
                            />
                        </div>
                    </div>
                    <div className={'areaDeBaixo'}>
                        <div className={'usuario4'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/NW22bTG/perfi-Mulher.jpg"}
                                nomeUsuario={'Nome Sobrenome'}
                            />
                        </div>
                        <div className={'usuario5'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/n8FxmqS/perfil-Homem1.jpg"}
                                nomeUsuario={'Nome Sobrenome'}
                            />
                        </div>
                        <div className={'usuario6'}>
                            <Usuario
                                linkFotoUsuario={"https://i.ibb.co/xmHn68K/perfil.png"}
                                nomeUsuario={'Nome Sobrenome'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}