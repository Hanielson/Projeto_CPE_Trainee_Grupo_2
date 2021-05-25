import React from 'react'
import Logo from '../../assets/logo.png'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'
import Livro from '../../Componentes/livro/livro'
import './livros.css'

export default function Livros() {
    return (
        <div className={'livrosPag'}>
            <Header />
            <div className={'bordaTituloLivros'}>
                <p className={'tituloPagLivros'}>Descubra novos livros</p>
            </div>
            <div className={'areaDosLivros'}>
                <div className={'areaDaDireitaLivros'}>
                    <div className={'cimaDireita'}>
                        <div className={'livro1'}>
                            <Livro
                                tituloDoLivro={'O menino do dedo verde'}
                                autor={'Maurice Druon'}
                                notaMedia={'06/10'}
                                linkCapaLivro={'https://i.ibb.co/d2hsjB2/image-7.png'}
                            />
                        </div>
                        <div className={'livro2'}>
                            <Livro
                                tituloDoLivro={'A última carta de amor'}
                                autor={'Jojo Moyes'}
                                notaMedia={'07/10'}
                                linkCapaLivro={'https://i.ibb.co/hRqZg7B/image-4.png'}
                            />
                        </div>
                    </div>
                    <div className={'baixoDireita'}>
                        <div className={'livro3'}>
                            <Livro
                                tituloDoLivro={'A menina que roubava livros'}
                                autor={'Markus Zusak'}
                                notaMedia={'08/10'}
                                linkCapaLivro={'https://i.ibb.co/MMw89Cp/image-6.png'}
                            />
                        </div>
                        <div className={'livro4'}>
                            <Livro
                                tituloDoLivro={'O fabuloso livro azul'}
                                autor={'Andrew Lang'}
                                notaMedia={'05/10'}
                                linkCapaLivro={"https://imgbb.online/images/2021/05/23/livro-azul_andrew-lang_CAPA_21_09_2017_FINAL_CURVAS-01239cc11ec97a8891.jpg"}
                            />
                        </div>
                    </div>
                </div>
                <div className={'areaDaEsquerdaLivros'}>
                    <div className={'cimaDireita'}>
                        <div className={'livro5'}>
                            <Livro
                                tituloDoLivro={'O fabuloso livro vermelho'}
                                autor={'Andrew Lang'}
                                notaMedia={'05/10'}
                                linkCapaLivro={"https://imgbb.online/images/2021/05/23/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-0190c3b96dc53af61c.jpg"}
                            />
                        </div>
                        <div className={'livro6'}>
                            <Livro
                                tituloDoLivro={'Coraline'}
                                autor={'Neil Gaiman'}
                                notaMedia={'09/10'}
                                linkCapaLivro={"https://imgbb.online/images/2021/05/23/d816c439000eea434f997ff7cedebc420eb43a10be903d1e.jpg"}
                            />
                        </div>
                    </div>
                    <div className={'baixoDireita'}>
                        <div className={'livro7'}>
                            <Livro
                                tituloDoLivro={'O fabuloso livro verde'}
                                autor={'Andrew Lang'}
                                notaMedia={'04/10'}
                                linkCapaLivro={"https://imgbb.online/images/2021/05/23/livro-verde_andrew-lang_CAPA-01a2d782d2a09c63f4.jpg"}
                            />
                        </div>
                        <div className={'livro8'}>
                            <Livro
                                tituloDoLivro={'Drácula'}
                                autor={'Bram Stoker'}
                                notaMedia={'10/10'}
                                linkCapaLivro={"https://imgbb.online/images/2021/05/23/197-dracula-de-bram-stoker-first-edition--2f61a6e15fd0e6d7d.jpg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}