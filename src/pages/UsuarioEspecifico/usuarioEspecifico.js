import React, { useEffect, useState } from 'react'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import AreaLivro from '../../Componentes/areaLivro/areaLivro'
import './usuarioEspecifico.css'
import MockUsuarioEspecifico from '../../mock/mockUsuarioEspecifico.json'
import { useLocation } from 'react-router'

export default function UsuarioEspecifico() {

    const localizacao = useLocation()
    const [usuarioQueNosQueremos, setUsuarioQueNosQueremos] = useState({})

    useEffect(quandoATelaForMontada, [])

    function quandoATelaForMontada() {
        switch (localizacao.pathname.split('/')[2]) {
            case 'usuario1':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[0])
                break
            case 'usuario2':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[1])
                break
            case 'usuario3':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[2])
                break
            case 'usuario4':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[3])
                break
            case 'usuario5':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[4])
                break
            case 'usuario6':
                setUsuarioQueNosQueremos(MockUsuarioEspecifico[5])
                break
            default:
                setUsuarioQueNosQueremos({})
                break

        }
    }

    return (
        <div className={'usuarioEspecifico'}>
            <Header />
            <div className={'areaPerfil'}>
                <div>
                    <img className={'fotoPerfil'} src={usuarioQueNosQueremos.foto} />
                </div>
                <div className={'dadosPerfil'}>
                    <p className={'apelido'}>{usuarioQueNosQueremos.nome}</p>
                    <div className={'dadosApelido'}>
                        <p className={'cidade'}>Cidade:
                            <a className={'nomeCidadeUE'}>{usuarioQueNosQueremos.cidade}</a>
                        </p>
                        <p className={'generoFavorito'}>Gênero Favorito:
                            <a className={'nomeGeneroUE'}>{usuarioQueNosQueremos.generoFavorito}</a>
                        </p>
                    </div>
                    <p className={'fraseUsuario'}>Frase que me define:
                        <a className={'fraseUE'}>{usuarioQueNosQueremos.frase}</a>
                    </p>
                </div>
            </div>
            <div className={'lendo'}>
                <div className={'bordaTituloLendo'}>
                    <p className={'tituloLendo'}>Lendo</p>
                </div>
                <AreaLivro
                    tituloLivro={usuarioQueNosQueremos.tituloLivroLendo}
                    autorLivro={usuarioQueNosQueremos.autorLivroLendo}
                    opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                    notaLivro={usuarioQueNosQueremos.notaLivroLendo}
                    linkFotoLivro={usuarioQueNosQueremos.fotoLivroLendo}
                />
            </div>
            <div className={'terminado'}>
                <div className={'bordaTituloTerminado'}>
                    <p className={'tituloTerminado'}>Terminado</p>
                </div>
                <AreaLivro
                    tituloLivro={usuarioQueNosQueremos.tituloLivroTerminou}
                    autorLivro={usuarioQueNosQueremos.autorLivroTerminou}
                    opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                    notaLivro={usuarioQueNosQueremos.notaLivroTerminou}
                    linkFotoLivro={usuarioQueNosQueremos.fotoLivroTerminou}
                />
            </div>
            <div className={'parou'}>
                <div className={'bordaTituloParou'}>
                    <p className={'tituloParou'}>Parou</p>
                </div>
                <AreaLivro
                    tituloLivro={usuarioQueNosQueremos.tituloLivroParou}
                    autorLivro={usuarioQueNosQueremos.autorLivroParou}
                    opiniaoUsuario={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididun' +
                        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
                        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                    notaLivro={usuarioQueNosQueremos.notaLivroParou}
                    linkFotoLivro={usuarioQueNosQueremos.fotoLivroParou}
                />
            </div>
            <Footer />
        </div>
    )
}