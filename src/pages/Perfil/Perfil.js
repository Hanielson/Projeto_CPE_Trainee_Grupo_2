import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import AreaLivro from '../../Componentes/areaLivro/areaLivro'
import './Perfil.css'

export default function Perfil() {

    const [estaEmEdicao, setEstaEmEdicao] = useState(true)
    const [nomeCidade, setNomeCidade] = useState('Belo Horizonte')
    const [nomeGenero, setNomeGenero] = useState('Romance')
    const [frase, setFrase] = useState('Lorem tipsum dolor sit amet, consectetur adipiscing')

    return (
        <div>
            <Header />
            <div className={'perfil'}>
                <div className={'areaPerfil'}>
                    <div>
                        <img className={'fotoPerfil'} src="https://i.ibb.co/wRH2DmY/woman-1284411-1920-1.png" />
                    </div>
                    <div className={'dadosPerfil'}>
                        <p className={'apelido'}>Luana Pina</p>
                        <div className={'dadosApelido'}>
                            <p className={'cidade'}>Cidade:
                                <input
                                    type={'text'}
                                    className={'nomeCidade'}
                                    value={nomeCidade}
                                    disabled={estaEmEdicao}
                                    onChange={(evento) => setNomeCidade(evento.target.value)}
                                />
                            </p>
                            <p className={'generoFavorito'}>Gênero Favorito:
                                <input
                                    className={'nomeGenero'}
                                    type={'text'}
                                    value={nomeGenero}
                                    disabled={estaEmEdicao}
                                    onChange={(evento) => setNomeGenero(evento.target.value)}
                                />
                            </p>
                        </div>
                        <p className={'fraseUsuario'}>Frase que me define:
                            <input
                                className={'frase'}
                                type={'text'}
                                value={frase}
                                disabled={estaEmEdicao}
                                onChange={(evento) => setFrase(evento.target.value)}
                            />
                        </p>
                    </div>
                    <div  className={'areaBotoes'}>
                        {
                            estaEmEdicao &&
                            <img
                                className={'botaoEditar'}
                                onClick={() => setEstaEmEdicao(false)}
                                src="https://i.ibb.co/LZRhG54/image-9.png"
                            />
                        }
                        {
                            !estaEmEdicao &&
                            <div>
                                <img
                                    className={'botaoSalvar'}
                                    onClick={() => setEstaEmEdicao(true)}
                                    src='https://i.ibb.co/4sL0TxJ/oie-q-T0s-Wvelw-I0g.png'
                                />
                                <img
                                    className={'botaoCancelar'}
                                    onClick={() => setEstaEmEdicao(true)}
                                    src="https://i.ibb.co/8zpqK3n/Cancel-128.png"
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className={'lendo'}>
                    <div className={'bordaTituloLendo'}>
                        <p className={'tituloLendo'}>Lendo</p>
                    </div>
                    <AreaLivro
                        tituloLivro={'O menino do dedo verde'}
                        autorLivro={'Maurice Druon'}
                        opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                            'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                        notaLivro={'6,0'}
                        linkFotoLivro={'https://i.ibb.co/d2hsjB2/image-7.png'}
                    />
                </div>
                <div className={'terminado'}>
                    <div className={'bordaTituloTerminado'}>
                        <p className={'tituloTerminado'}>Terminado</p>
                    </div>
                    <AreaLivro
                        tituloLivro={'A última carta de amor'}
                        autorLivro={'Jojo Moyes'}
                        opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                            'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                        notaLivro={'7,0'}
                        linkFotoLivro={'https://i.ibb.co/hRqZg7B/image-4.png'}
                    />
                </div>
                <div className={'parou'}>
                    <div className={'bordaTituloParou'}>
                        <p className={'tituloParou'}>Parou</p>
                    </div>
                    <AreaLivro
                        tituloLivro={'A menina que roubava livros'}
                        autorLivro={'Markus Zusak'}
                        opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                            'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                        notaLivro={'8,0'}
                        linkFotoLivro={'https://i.ibb.co/MMw89Cp/image-6.png'}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
