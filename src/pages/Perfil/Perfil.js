import React from 'react'
import Logo from '../../assets/logo.png'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import AreaLivro from '../../Componentes/areaLivro/areaLivro'
import './Perfil.css'

export default function Perfil() {
    return (
        <div>
            <Header />
            <div className={'perfil'}>
                <div className={'areaPerfil'}>
                    <div>
                        <img className={'fotoPerfil'} src="https://i.ibb.co/wRH2DmY/woman-1284411-1920-1.png"/>
                    </div>
                    <div className={'dadosPerfil'}>
                        <p className={'apelido'}>Luana Pina</p>
                        <div className={'dadosApelido'}>
                            <p className={'cidade'}>Cidade: <a className={'nomeCidade'}>Belo Horizonte</a></p>
                            <p className={'generoFavorito'}>Gênero Favorito: <a className={'nomeGenero'}> Romance </a></p>
                        </div>
                    </div>
                    <div>
                        <img  className={'botaoEditar'} src="https://i.ibb.co/LZRhG54/image-9.png"/>
                    </div>
                </div>
                <div className={'lendo'}>
                    <div className={'bordaTituloLendo'}>
                        <p className={'titulo'}>Lendo</p>
                    </div>
                    <AreaLivro/>
                </div>
                <div className={'terminado'}>
                    <div className={'bordaTituloTerminado'}>
                        <p className={'tituloTerminado'}>Terminado</p>
                    </div>
                    <AreaLivro/>
                </div>
                <div className={'parou'}>
                    <div className={'bordaTituloParou'}>
                        <p className={'titulo'}>Parou</p>
                    </div>
                    <AreaLivro/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
